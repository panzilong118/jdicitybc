import React from 'react';
import TimePickerPanel from 'rc-time-picker/lib/Panel';
import classNames from 'classnames';


import LocaleReceiver from '../locale-provider/LocaleReceiver';

import enUS from './locale/en_US';

export function generateShowHourMinuteSecond(format) {
    // Ref: http://momentjs.com/docs/#/parsing/string-format/
    return {
        showHour: (
            format.indexOf('H') > -1 ||
          format.indexOf('h') > -1 ||
          format.indexOf('k') > -1
        ),
        showMinute: format.indexOf('m') > -1,
        showSecond: format.indexOf('s') > -1,
    };
}

function getColumns({ showHour, showMinute, showSecond, use12Hours }) {
    let column = 0;
    if (showHour) {
        column += 1;
    }
    if (showMinute) {
        column += 1;
    }
    if (showSecond) {
        column += 1;
    }
    if (use12Hours) {
        column += 1;
    }
    return column;
}

export default function wrapPicker(Picker, defaultFormat) {
    return class PickerWrapper extends React.Component {
          static defaultProps = {
              format: defaultFormat || 'YYYY-MM-DD',
              transitionName: 'slide-up',
              popupStyle: {},
              onChange() {
              },
              onOk() {
              },
              onOpenChange() {
              },
              locale: {},
              prefixCls: 'jc-calendar',
              inputPrefixCls: 'jc-input',
          };

          componentDidMount() {
              const { autoFocus, disabled } = this.props;
              if (autoFocus && !disabled) {
                  this.focus();
              }
          }

          getDefaultLocale = () => {
              const result = {
                  ...enUS,
                  ...this.props.locale,
              };
              result.lang = {
                  ...result.lang,
                  ...(this.props.locale || {}).lang,
              };
              return result;
          }


          picker;
      
          handleOpenChange = (open) => {
              const { onOpenChange } = this.props;
              onOpenChange(open);
          }
      
          handleFocus = (e) => {
              const { onFocus } = this.props;
              if (onFocus) {
                  onFocus(e);
              }
          }
      
          handleBlur = (e) => {
              const { onBlur } = this.props;
              if (onBlur) {
                  onBlur(e);
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
      

          renderPicker = (locale, localeCode) => {
              const { props } = this;
              const { prefixCls, inputPrefixCls } = props;
              const pickerClass = classNames(`${prefixCls}-picker`, {
                  [`${prefixCls}-picker-${props.size}`]: !!props.size,
              });
              const pickerInputClass = classNames(`${prefixCls}-picker-input`, inputPrefixCls, {
                  [`${inputPrefixCls}-lg`]: props.size === 'large',
                  [`${inputPrefixCls}-sm`]: props.size === 'small',
                  [`${inputPrefixCls}-disabled`]: props.disabled,
              });
      
              const timeFormat = (props.showTime && props.showTime.format) || 'HH:mm:ss';
              const rcTimePickerProps = {
                  ...generateShowHourMinuteSecond(timeFormat),
                  format: timeFormat,
                  use12Hours: (props.showTime && props.showTime.use12Hours),
              };
              const columns = getColumns(rcTimePickerProps);
              const timePickerCls = `${prefixCls}-time-picker-column-${columns}`;
              const timePicker = props.showTime ? (
                  <TimePickerPanel
                      {...rcTimePickerProps}
                      {...props.showTime}
                      prefixCls={`${prefixCls}-time-picker`}
                      className={timePickerCls}
                      placeholder={locale.timePickerLocale.placeholder}
                      transitionName='slide-up'
                  />
              ) : null;
      
              return (
                  <Picker
                      {...props}
                      ref={this.savePicker}
                      pickerClass={pickerClass}
                      pickerInputClass={pickerInputClass}
                      locale={locale}
                      localeCode={localeCode}
                      timePicker={timePicker}
                      onOpenChange={this.handleOpenChange}
                      onFocus={this.handleFocus}
                      onBlur={this.handleBlur}
                  />
              );
          }

          render() {
              return (
                  <LocaleReceiver
                      componentName='DatePicker'
                      defaultLocale={this.getDefaultLocale}
                  >
                      {this.renderPicker}
                  </LocaleReceiver>
              );
          }
    };
}
