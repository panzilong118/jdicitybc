import React from 'react';
import moment from 'moment';
import MonthCalendar from 'rc-calendar/lib/MonthCalendar';
import RcDatePicker from 'rc-calendar/lib/Picker';
import classNames from 'classnames';
import omit from 'omit.js';
import PropTypes from 'prop-types';
import Icon from '../icon';
import warning from '../_util/warning';
import interopDefault from '../_util/interopDefault';


export default function createPicker(TheCalendar) {
    return class CalenderWrapper extends React.Component {
        static defaultProps = {
            prefixCls: 'jc-calendar',
            allowClear: true,
            showToday: true,
        };

        static propTypes = {
            value: PropTypes.object,
            prefixCls: PropTypes.string,
            allowClear: PropTypes.bool,
            showToday: PropTypes.bool,
        }


        constructor(props) {
            super(props);
            const value = props.value || props.defaultValue;
            if (value && !interopDefault(moment).isMoment(value)) {
                throw new Error('The value/defaultValue of DatePicker or MonthPicker must be ' +
                'a moment object after `jc@1.0`, see: https://u.ant.design/date-picker-value');
            }
            this.state = {
                value,
                showDate: value,
            };
        }
          
        componentWillReceiveProps(nextProps) {
            if ('value' in nextProps) {
                this.setState({
                    value: nextProps.value,
                    showDate: nextProps.value,
                });
            }
        }
  
          input;
  
      clearSelection = (e) => {
          e.preventDefault();
          e.stopPropagation();
          this.handleChange(null);
      }
  
      handleChange = (value) => {
          const { props } = this;
          if (!('value' in props)) {
              this.setState({
                  value,
                  showDate: value,
              });
          }
          props.onChange(value, (value && value.format(props.format)) || '');
      }
  
      handleCalendarChange = (value) => {
          this.setState({ showDate: value });
      }

      focus() {
          this.input.focus();
      }
  
      blur() {
          this.input.blur();
      }
  
      saveInput = (node) => {
          this.input = node;
      }

      renderFooter = (...args) => {
          const { prefixCls, renderExtraFooter } = this.props;
          return renderExtraFooter ? (
              <div className={`${prefixCls}-footer-extra`}>
                  {renderExtraFooter(...args)}
              </div>
          ) : null;
      }
  
      render() {
          const { value, showDate } = this.state;
          const props = omit(this.props, ['onChange']);
          const { prefixCls, locale, localeCode } = props;

          const placeholder = ('placeholder' in props)
              ? props.placeholder : locale.lang.placeholder;

          const disabledTime = props.showTime ? props.disabledTime : null;

          const calendarClassName = classNames({
              [`${prefixCls}-time`]: props.showTime,
              [`${prefixCls}-month`]: MonthCalendar === TheCalendar,
          });

          if (value && localeCode) {
              value.locale(localeCode);
          }
    
          let pickerProps = {};
          let calendarProps = {};
          if (props.showTime) {
              calendarProps = {
              // fix https://github.com/ant-design/ant-design/issues/1902
                  onSelect: this.handleChange,
              };
          } else {
              pickerProps = {
                  onChange: this.handleChange,
              };
          }
          if ('mode' in props) {
              calendarProps.mode = props.mode;
          }

          warning(!('onOK' in props), 'It should be `DatePicker[onOk]` or `MonthPicker[onOk]`, instead of `onOK`!');
          const calendar = (
              <TheCalendar
                  {...calendarProps}
                  disabledDate={props.disabledDate}
                  disabledTime={disabledTime}
                  locale={locale.lang}
                  timePicker={props.timePicker}
                  defaultValue={props.defaultPickerValue || interopDefault(moment)()}
                  dateInputPlaceholder={placeholder}
                  prefixCls={prefixCls}
                  className={calendarClassName}
                  onOk={props.onOk}
                  dateRender={props.dateRender}
                  format={props.format}
                  showToday={props.showToday}
                  monthCellContentRender={props.monthCellContentRender}
                  renderFooter={this.renderFooter}
                  onPanelChange={props.onPanelChange}
                  onChange={this.handleCalendarChange}
                  value={showDate}
              />
          );

          const clearIcon = (!props.disabled && props.allowClear && value) ? (
              <Icon
                  type='cross-circle'
                  className={`${prefixCls}-picker-clear`}
                  onClick={this.clearSelection}
              />
          ) : null;
    
          const input = ({ value: inputValue }) => (
              <div>
                  <input
                      ref={this.saveInput}
                      disabled={props.disabled}
                      readOnly
                      value={(inputValue && inputValue.format(props.format)) || ''}
                      placeholder={placeholder}
                      className={props.pickerInputClass}
                  />
                  {clearIcon}
                  <span className={`${prefixCls}-picker-icon`} />
              </div>
          );

          return (
              <span
                  id={props.id}
                  className={classNames(props.className, props.pickerClass)}
                  style={props.style}
                  onFocus={props.onFocus}
                  onBlur={props.onBlur}
              >
                  <RcDatePicker
                      {...props}
                      {...pickerProps}
                      calendar={calendar}
                      value={value}
                      prefixCls={`${prefixCls}-picker-container`}
                      style={props.popupStyle}
                  >
                      {input}
                  </RcDatePicker>
              </span>
          );
      }
    };
}
