import * as React from 'react';
import debounce from 'lodash/debounce';

// matchMedia polyfill for
// https://github.com/WickyNilliams/enquire.js/issues/82
if (typeof window !== 'undefined') {
  const matchMediaPolyfill = (mediaQuery) => {
    return {
      media: mediaQuery,
      matches: false,
      addListener() {
      },
      removeListener() {
      },
    };
  };
  window.matchMedia = window.matchMedia || matchMediaPolyfill;
}
// Use require over import (will be lifted up)
// make sure matchMedia polyfill run before require('react-slick')
// Fix https://github.com/ant-design/ant-design/issues/6560
// Fix https://github.com/ant-design/ant-design/issues/3308
const SlickCarousel = require('react-slick').default;

export default class Carousel extends React.Component {
  static defaultProps = {
    dots: true,
    arrows: false,
    prefixCls: 'jc-carousel',
    draggable: false,
  };

  constructor(props) {
    super(props);
    this.onWindowResized = debounce(this.onWindowResized, 500, {
      leading: false,
    });
    this.innerSlider = {};
    this.slick = {};
  }

  componentDidMount() {
    const { autoplay } = this.props;
    if (autoplay) {
      window.addEventListener('resize', this.onWindowResized);
    }
    // https://github.com/ant-design/ant-design/issues/7191
    this.innerSlider = this.slick && this.slick.innerSlider;
  }

  componentWillUnmount() {
    const { autoplay } = this.props;
    if (autoplay) {
      window.removeEventListener('resize', this.onWindowResized);
      (this.onWindowResized).cancel();
    }
  }

  onWindowResized = () => {
    // Fix https://github.com/ant-design/ant-design/issues/2550
    const { autoplay } = this.props;
    if (autoplay && this.slick && this.slick.innerSlider && this.slick.innerSlider.autoPlay) {
      this.slick.innerSlider.autoPlay();
    }
  }

  saveSlick = (node) => {
    this.slick = node;
  }

  next() {
    this.slick.slickNext();
  }

  prev() {
    this.slick.slickPrev();
  }

  goTo(slide) {
    this.slick.slickGoTo(slide);
  }

  render() {
    let props = {
      ...this.props,
    };

    if (props.effect === 'fade') {
      props.fade = true;
    }

    let className = props.prefixCls;
    if (props.vertical) {
      className = `${className} ${className}-vertical`;
    }

    return (
      <div className={className}>
        <SlickCarousel ref={this.saveSlick} {...props} />
      </div>
    );
  }
}
