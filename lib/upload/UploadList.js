'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _rcAnimate = require('rc-animate');

var _rcAnimate2 = _interopRequireDefault(_rcAnimate);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _tooltip = require('../tooltip');

var _tooltip2 = _interopRequireDefault(_tooltip);

var _progress = require('../progress');

var _progress2 = _interopRequireDefault(_progress);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL
var previewFile = function previewFile(file, callback) {
  var reader = new FileReader();
  reader.onloadend = function () {
    return callback(reader.result);
  };
  reader.readAsDataURL(file);
};

var extname = function extname(url) {
  if (!url) {
    return '';
  }
  var temp = url.split('/');
  var filename = temp[temp.length - 1];
  var filenameWithoutSuffix = filename.split(/\#|\?/)[0];
  return (/\.[^./\\]*$/.exec(filenameWithoutSuffix) || [''])[0];
};

var isImageUrl = function isImageUrl(url) {
  var extension = extname(url);
  if (/^data:image\//.test(url) || /(webp|svg|png|gif|jpg|jpeg|bmp)$/.test(extension)) {
    return true;
  } else if (/^data:/.test(url)) {
    // other file types of base64
    return false;
  } else if (extension) {
    // other file types which have extension
    return false;
  }
  return true;
};

var UploadList = function (_React$Component) {
  _inherits(UploadList, _React$Component);

  function UploadList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, UploadList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = UploadList.__proto__ || Object.getPrototypeOf(UploadList)).call.apply(_ref, [this].concat(args))), _this), _this.handleClose = function (file) {
      var onRemove = _this.props.onRemove;

      if (onRemove) {
        onRemove(file);
      }
    }, _this.handlePreview = function (file, e) {
      var onPreview = _this.props.onPreview;

      if (!onPreview) {
        return;
      }
      e.preventDefault();
      return onPreview(file);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(UploadList, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var _this2 = this;

      if (this.props.listType !== 'picture' && this.props.listType !== 'picture-card') {
        return;
      }
      (this.props.items || []).forEach(function (file) {
        if (typeof document === 'undefined' || typeof window === 'undefined' || !window.FileReader || !window.File || !(file.originFileObj instanceof File) || file.thumbUrl !== undefined) {
          return;
        }
        /*eslint-disable */
        file.thumbUrl = '';
        /*eslint-enable */
        previewFile(file.originFileObj, function (previewDataUrl) {
          /*eslint-disable */
          file.thumbUrl = previewDataUrl;
          /*eslint-enable */
          _this2.forceUpdate();
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this,
          _classNames2;

      var _props = this.props,
          prefixCls = _props.prefixCls,
          _props$items = _props.items,
          items = _props$items === undefined ? [] : _props$items,
          listType = _props.listType,
          showPreviewIcon = _props.showPreviewIcon,
          showRemoveIcon = _props.showRemoveIcon,
          locale = _props.locale;

      var list = items.map(function (file) {
        var _classNames;

        var progress = void 0;
        var icon = React.createElement(_icon2.default, { type: file.status === 'uploading' ? 'loading' : 'paper-clip' });

        if (listType === 'picture' || listType === 'picture-card') {
          if (listType === 'picture-card' && file.status === 'uploading') {
            icon = React.createElement(
              'div',
              { className: prefixCls + '-list-item-uploading-text' },
              locale.uploading
            );
          } else if (!file.thumbUrl && !file.url) {
            icon = React.createElement(_icon2.default, { className: prefixCls + '-list-item-thumbnail', type: 'picture' });
          } else {
            var thumbnail = isImageUrl(file.thumbUrl || file.url) ? React.createElement('img', { src: file.thumbUrl || file.url, alt: file.name }) : React.createElement(_icon2.default, { type: 'file', className: prefixCls + '-list-item-icon' });
            icon = React.createElement(
              'a',
              {
                className: prefixCls + '-list-item-thumbnail',
                onClick: function onClick(e) {
                  return _this3.handlePreview(file, e);
                },
                href: file.url || file.thumbUrl,
                target: '_blank',
                rel: 'noopener noreferrer'
              },
              thumbnail
            );
          }
        }

        if (file.status === 'uploading') {
          // show loading icon if upload progress listener is disabled
          var loadingProgress = 'percent' in file ? React.createElement(_progress2.default, _extends({ type: 'line' }, _this3.props.progressAttr, { percent: file.percent })) : null;

          progress = React.createElement(
            'div',
            { className: prefixCls + '-list-item-progress', key: 'progress' },
            loadingProgress
          );
        }
        var infoUploadingClass = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, prefixCls + '-list-item', true), _defineProperty(_classNames, prefixCls + '-list-item-' + file.status, true), _classNames));
        var preview = file.url ? React.createElement(
          'a',
          _extends({}, file.linkProps, {
            href: file.url,
            target: '_blank',
            rel: 'noopener noreferrer',
            className: prefixCls + '-list-item-name',
            onClick: function onClick(e) {
              return _this3.handlePreview(file, e);
            },
            title: file.name
          }),
          file.name
        ) : React.createElement(
          'span',
          {
            className: prefixCls + '-list-item-name',
            onClick: function onClick(e) {
              return _this3.handlePreview(file, e);
            },
            title: file.name
          },
          file.name
        );
        var style = {
          pointerEvents: 'none',
          opacity: 0.5
        };
        var previewIcon = showPreviewIcon ? React.createElement(
          'a',
          {
            href: file.url || file.thumbUrl,
            target: '_blank',
            rel: 'noopener noreferrer',
            style: file.url || file.thumbUrl ? undefined : style,
            onClick: function onClick(e) {
              return _this3.handlePreview(file, e);
            },
            title: locale.previewFile
          },
          React.createElement(_icon2.default, { type: 'eye-o' })
        ) : null;
        var removeIcon = showRemoveIcon ? React.createElement(_icon2.default, { type: 'delete', title: locale.removeFile, onClick: function onClick() {
            return _this3.handleClose(file);
          } }) : null;
        var removeIconCross = showRemoveIcon ? React.createElement(_icon2.default, { type: 'cross', title: locale.removeFile, onClick: function onClick() {
            return _this3.handleClose(file);
          } }) : null;
        var actions = listType === 'picture-card' && file.status !== 'uploading' ? React.createElement(
          'span',
          { className: prefixCls + '-list-item-actions' },
          previewIcon,
          removeIcon
        ) : removeIconCross;
        var message = void 0;
        if (file.response && typeof file.response === 'string') {
          message = file.response;
        } else {
          message = file.error && file.error.statusText || locale.uploadError;
        }
        var iconAndPreview = file.status === 'error' ? React.createElement(
          _tooltip2.default,
          { title: message },
          icon,
          preview
        ) : React.createElement(
          'span',
          null,
          icon,
          preview
        );

        return React.createElement(
          'div',
          { className: infoUploadingClass, key: file.uid },
          React.createElement(
            'div',
            { className: prefixCls + '-list-item-info' },
            iconAndPreview
          ),
          actions,
          React.createElement(
            _rcAnimate2.default,
            { transitionName: 'fade', component: '' },
            progress
          )
        );
      });
      var listClassNames = (0, _classnames2.default)((_classNames2 = {}, _defineProperty(_classNames2, prefixCls + '-list', true), _defineProperty(_classNames2, prefixCls + '-list-' + listType, true), _classNames2));
      var animationDirection = listType === 'picture-card' ? 'animate-inline' : 'animate';
      return React.createElement(
        _rcAnimate2.default,
        {
          transitionName: prefixCls + '-' + animationDirection,
          component: 'div',
          className: listClassNames
        },
        list
      );
    }
  }]);

  return UploadList;
}(React.Component);

UploadList.defaultProps = {
  listType: 'text', // or picture
  progressAttr: {
    strokeWidth: 2,
    showInfo: false
  },
  prefixCls: 'jc-upload',
  showRemoveIcon: true,
  showPreviewIcon: true
};
exports.default = UploadList;
//# sourceMappingURL=UploadList.js.map