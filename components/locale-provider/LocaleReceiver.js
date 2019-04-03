/**
 * @author chenyanhua
 * @version 3.4.1
 */
import * as React from 'react';
import PropTypes from 'prop-types';

export const LocaleReceiverProps = {
    componentName: PropTypes.string,
    defaultLocale: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    children: PropTypes.func
};

export const LocaleReceiverContext = {
    jcLocale: PropTypes.object
};

export default class LocaleReceiver extends React.Component {
  static contextTypes = {
      jcLocale: PropTypes.object,
  };

  static propTypes = { ...LocaleReceiverProps };

  getLocale() {
      const { componentName, defaultLocale } = this.props;
      const { jcLocale } = this.context;
      const localeFromContext = jcLocale && jcLocale[componentName];
      return {
          ...(typeof defaultLocale === 'function' ? defaultLocale() : defaultLocale),
          ...(localeFromContext || {}),
      };
  }

  getLocaleCode() {
      const { jcLocale } = this.context;
      const localeCode = jcLocale && jcLocale.locale;
      // Had use LocaleProvide but didn't set locale
      if (jcLocale && jcLocale.exist && !localeCode) {
          return 'en-us';
      }
      return localeCode;
  }

  render() {
      return this.props.children(this.getLocale(), this.getLocaleCode());
  }
}
