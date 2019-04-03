/**
 * @author chenyanhua
 * @version 3.4.1
 */import * as React from 'react';
import PropTypes from 'prop-types';
import * as moment from 'moment';
import interopDefault from '../_util/interopDefault';
import { ModalLocale, changeConfirmLocale } from '../modal/locale';

export const Locale = {
  locale: PropTypes.string.isRequired,
  Pagination: PropTypes.object,
  DatePicker: PropTypes.object,
  TimePicker: PropTypes.object,
  Calendar: PropTypes.object,
  Table: PropTypes.object,
  Modal: PropTypes.shape(ModalLocale),
  Popconfirm: PropTypes.object,
  Transfer: PropTypes.object,
  Select: PropTypes.object,
  Upload: PropTypes.object
}

export const LocaleProviderProps = {
  locale: PropTypes.shape(Locale),
  children: PropTypes.any
}

function setMomentLocale(locale) {
  if (locale && locale.locale) {
    interopDefault(moment).locale(locale.locale);
  } else {
    interopDefault(moment).locale('en');
  }
}

export default class LocaleProvider extends React.Component {
  static propTypes = {
    ...LocaleProviderProps,
    locale: PropTypes.object
  };

  static defaultProps = {
    locale: {}
  };

  static childContextTypes = {
    jcLocale: PropTypes.object,
  };

  constructor(props) {
    super(props);
    setMomentLocale(props.locale);
    changeConfirmLocale(props.locale && props.locale.Modal);
  }

  getChildContext() {
    return {
      jcLocale: {
        ...this.props.locale,
        exist: true,
      },
    };
  }

  componentWillReceiveProps(nextProps) {
    const { locale } = this.props;
    const nextLocale = nextProps.locale;
    if (locale !== nextLocale) {
      setMomentLocale(nextProps.locale);
    }
  }

  componentDidUpdate() {
    const { locale } = this.props;
    changeConfirmLocale(locale && locale.Modal);
  }

  componentWillUnmount() {
    changeConfirmLocale();
  }

  render() {
    return React.Children.only(this.props.children);
  }
}
