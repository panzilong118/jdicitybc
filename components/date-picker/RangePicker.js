/* tslint:disable jsx-no-multiline-js */
import React from 'react';
import moment from 'moment';
import RangeCalendar from 'rc-calendar/lib/RangeCalendar';
import RcDatePicker from 'rc-calendar/lib/Picker';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Icon from '../icon';
import warning from '../_util/warning';
import interopDefault from '../_util/interopDefault';


function getShowDateFromValue(value) {
    const [start, end] = value;
    // value could be an empty array, then we should not reset showDate
    if (!start && !end) {
        return;
    }
    const newEnd = end && end.isSame(start, 'month') ? end.clone().add(1, 'month') : end;
    return [start, newEnd];
}

function formatValue(value, format) {
    return (value && value.format(format)) || '';
}
  
function pickerValueAdapter(value) {
    if (!value) {
        return [];
    }
    if (Array.isArray(value)) {
        return value;
    }
    return [value, value.clone().add(1, 'month')];
}
  
function isEmptyArray(arr) {
    if (Array.isArray(arr)) {
        return arr.length === 0 || arr.every(i => !i);
    }
    return false;
}
  
function fixLocale(value, localeCode) {
    if (!localeCode) {
        return;
    }
    if (!value || value.length === 0) {
        return;
    }
    if (value[0]) {
        value[0].locale(localeCode);
    }
    if (value[1]) {
        value[1].locale(localeCode);
    }
}
  
export default class RangePicker extends React.Component {
      static defaultProps = {
          prefixCls: 'jc-calendar',
          allowClear: true,
          showToday: false,
      };

      static propTypes = {
          value: PropTypes.array,
          showDate: PropTypes.array,
          open: PropTypes.bool,
          hoverValue: PropTypes.array,
          prefixCls: PropTypes.string,
          allowClear: PropTypes.bool,
          showToday: PropTypes.bool,
      }
  

      constructor(props) {
          super(props);
          const value = props.value || props.defaultValue || [];
          if (
              value[1] && !interopDefault(moment).isMoment(value[1])
          ) {
              throw new Error('The value/defaultValue of RangePicker must be a moment object array after `jc@1.0`, ' +
            'see: https://u.ant.design/date-picker-value');
          }
          if (
              value[0] && !interopDefault(moment).isMoment(value[0])
          ) {
              throw new Error('The value/defaultValue of RangePicker must be a moment object array after `jc@1.0`, ' +
          'see: https://u.ant.design/date-picker-value');
          }
          
          const pickerValue = !value || isEmptyArray(value) ? props.defaultPickerValue : value;
          this.state = {
              value,
              showDate: pickerValueAdapter(pickerValue || interopDefault(moment)()),
              open: props.open,
              hoverValue: [],
          };
      }

      componentWillReceiveProps(nextProps) {
        if ('value' in nextProps) {
            const state = this.state;
            const value = nextProps.value || [];
            this.setState({
                value,
                showDate: getShowDateFromValue(value) || state.showDate,
            });
        }
        if ('open' in nextProps) {
            this.setState({
                open: nextProps.open,
            });
        }
      }

      setValue(value, hidePanel) {
          this.handleChange(value);
          if ((hidePanel || !this.props.showTime) && !('open' in this.props)) {
              this.setState({ open: false });
          }
      }

     picker;
    
      clearSelection = (e) => {
          e.preventDefault();
          e.stopPropagation();
          this.setState({ value: [] });
          this.handleChange([]);
      }
    
      clearHoverValue = () => this.setState({ hoverValue: [] });
    
      handleChange = (value) => {
          const { props } = this;
          if (!('value' in props)) {
              this.setState(({ showDate }) => ({
                  value,
                  showDate: getShowDateFromValue(value) || showDate,
              }));
          }
          props.onChange(value, [
              formatValue(value[0], props.format),
              formatValue(value[1], props.format),
          ]);
      }
    
      handleOpenChange = (open) => {
          if (!('open' in this.props)) {
              this.setState({ open });
          }
    
          if (open === false) {
              this.clearHoverValue();
          }
    
          const { onOpenChange } = this.props;
          if (onOpenChange) {
              onOpenChange(open);
          }
      }

      handleShowDateChange = showDate => this.setState({ showDate });

      handleHoverChange = hoverValue => this.setState({ hoverValue });
    
      handleRangeMouseLeave = () => {
          if (this.state.open) {
              this.clearHoverValue();
          }
      }
    
      handleCalendarInputSelect = (value) => {
          if (!value[0]) {
              return;
          }
          this.setState(({ showDate }) => ({
              value,
              showDate: getShowDateFromValue(value) || showDate,
          }));
      }
    
      handleRangeClick = (value) => {
          if (typeof value === 'function') {
              value = value();
          }
    
          this.setValue(value, true);
    
          const { onOk } = this.props;
          if (onOk) {
              onOk(value);
          }
      }
    
      focus() {
          this.picker.focus();
      }
    
      blur() {
          this.picker.blur();
      }
    
      savePicker = (node) => {
          this.picker = node;
      }
    
      renderFooter = (...args) => {
          const { prefixCls, ranges, renderExtraFooter } = this.props;
          if (!ranges && !renderExtraFooter) {
              return null;
          }
          const customFooter = renderExtraFooter ? (
              <div className={`${prefixCls}-footer-extra`} key='extra'>
                  {renderExtraFooter(...args)}
              </div>
          ) : null;
          const operations = Object.keys(ranges || {}).map((range) => {
              const value = ranges[range];
              return (
                  <a
                      key={range}
                      onClick={() => this.handleRangeClick(value)}
                      onMouseEnter={() => this.setState({ hoverValue: value })}
                      onMouseLeave={this.handleRangeMouseLeave}
                  >
                      {range}
                  </a>
              );
          });
          const rangeNode = (
              <div className={`${prefixCls}-footer-extra ${prefixCls}-range-quick-selector`} key='range'>
                  {operations}
              </div>
          );
          return [rangeNode, customFooter];
      }


      render() {
          const { state, props } = this;
          const { value, showDate, hoverValue, open } = state;
          const {
              prefixCls, popupStyle, style,
              disabledDate, disabledTime,
              showTime, showToday,
              ranges, onOk, locale, localeCode, format,
              dateRender, onCalendarChange,
          } = props;

          fixLocale(value, localeCode);
          fixLocale(showDate, localeCode);
    
          warning(!('onOK' in props), 'It should be `RangePicker[onOk]`, instead of `onOK`!');
    
          const calendarClassName = classNames({
              [`${prefixCls}-time`]: showTime,
              [`${prefixCls}-range-with-ranges`]: ranges,
          });

          // 需要选择时间时，点击 ok 时才触发 onChange
          const pickerChangeHandler = {
              onChange: this.handleChange,
          };
          let calendarProps = {
              onOk: this.handleChange,
          };
          if (props.timePicker) {
              pickerChangeHandler.onChange = changedValue => this.handleChange(changedValue);
          } else {
              calendarProps = {};
          }
          if ('mode' in props) {
              calendarProps.mode = props.mode;
          }
  
          const startPlaceholder = ('placeholder' in props) ? props.placeholder[0] : locale.lang.rangePlaceholder[0];
          const endPlaceholder = ('placeholder' in props) ? props.placeholder[1] : locale.lang.rangePlaceholder[1];

          const calendar = (
              <RangeCalendar
                  {...calendarProps}
                  onChange={onCalendarChange}
                  format={format}
                  prefixCls={prefixCls}
                  className={calendarClassName}
                  renderFooter={this.renderFooter}
                  timePicker={props.timePicker}
                  disabledDate={disabledDate}
                  disabledTime={disabledTime}
                  dateInputPlaceholder={[startPlaceholder, endPlaceholder]}
                  locale={locale.lang}
                  onOk={onOk}
                  dateRender={dateRender}
                  value={showDate}
                  onValueChange={this.handleShowDateChange}
                  hoverValue={hoverValue}
                  onHoverChange={this.handleHoverChange}
                  onPanelChange={props.onPanelChange}
                  showToday={showToday}
                  onInputSelect={this.handleCalendarInputSelect}
              />
          );
      
          // default width for showTime
          const pickerStyle = {};
          if (props.showTime) {
              pickerStyle.width = (style && style.width) || 350;
          }

          const clearIcon = (!props.disabled && props.allowClear && value && (value[0] || value[1])) ? (
              <Icon
                  type='cross-circle'
                  className={`${prefixCls}-picker-clear`}
                  onClick={this.clearSelection}
              />
          ) : null;

          const input = ({ value: inputValue }) => {
              const start = inputValue[0];
              const end = inputValue[1];
              return (
                  <span className={props.pickerInputClass}>
                      <input
                          disabled={props.disabled}
                          readOnly
                          value={(start && start.format(props.format)) || ''}
                          placeholder={startPlaceholder}
                          className={`${prefixCls}-range-picker-input`}
                          tabIndex={-1}
                      />
                      <span className={`${prefixCls}-range-picker-separator`}> ~ </span>
                      <input
                          disabled={props.disabled}
                          readOnly
                          value={(end && end.format(props.format)) || ''}
                          placeholder={endPlaceholder}
                          className={`${prefixCls}-range-picker-input`}
                          tabIndex={-1}
                      />
                      {clearIcon}
                      <span className={`${prefixCls}-picker-icon`} />
                  </span>
              );
          };

          return (
              <span
                  ref={this.savePicker}
                  id={props.id}
                  className={classNames(props.className, props.pickerClass)}
                  style={{ ...style, ...pickerStyle }}
                  tabIndex={props.disabled ? -1 : 0}
                  onFocus={props.onFocus}
                  onBlur={props.onBlur}
              >
                  <RcDatePicker
                      {...props}
                      {...pickerChangeHandler}
                      calendar={calendar}
                      value={value}
                      open={open}
                      onOpenChange={this.handleOpenChange}
                      prefixCls={`${prefixCls}-picker-container`}
                      style={popupStyle}
                  >
                      {input}
                  </RcDatePicker>
              </span>
          );
      }
}
