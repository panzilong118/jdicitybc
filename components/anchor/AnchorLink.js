import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class AnchorLink extends React.Component {
  static defaultProps = {
    prefixCls: 'jc-anchor',
    href: '#',
  };

  static contextTypes = {
    jcAnchor: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.context = {
      jcAnchor : {}
    }
  }

  componentDidMount() {
    this.context.jcAnchor.registerLink(this.props.href);
  }

  componentWillUnmount() {
    this.context.jcAnchor.unregisterLink(this.props.href);
  }

  handleClick = () => {
    this.context.jcAnchor.scrollTo(this.props.href);
  }

  render() {
    const {
      prefixCls,
      href,
      title,
      children,
    } = this.props;
    const active = this.context.jcAnchor.activeLink === href;
    const wrapperClassName = classNames(`${prefixCls}-link`, {
      [`${prefixCls}-link-active`]: active,
    });
    const titleClassName = classNames(`${prefixCls}-link-title`, {
      [`${prefixCls}-link-title-active`]: active,
    });
    return (
      <div className={wrapperClassName}>
        <a
          className={titleClassName}
          href={href}
          title={typeof title === 'string' ? title : ''}
          onClick={this.handleClick}
        >
          {title}
        </a>
        {children}
      </div>
    );
  }
}
