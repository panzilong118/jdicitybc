'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _modal = require('jdcloudui/lib/modal');

var _modal2 = _interopRequireDefault(_modal);

var _spin = require('jdcloudui/lib/spin');

var _spin2 = _interopRequireDefault(_spin);

var _icon = require('jdcloudui/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

require('jdcloudui/lib/modal/style');

require('jdcloudui/lib/spin/style');

require('jdcloudui/lib/icon/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _ApiClient = require('../../apiClient/ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

require('./style/style.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
*@auth chenyanhua
*/
/*********  基础组件 上传插件  *********/
var UploadSelect = function (_Component) {
  (0, _inherits3.default)(UploadSelect, _Component);

  function UploadSelect(props) {
    (0, _classCallCheck3.default)(this, UploadSelect);

    var _this = (0, _possibleConstructorReturn3.default)(this, (UploadSelect.__proto__ || (0, _getPrototypeOf2.default)(UploadSelect)).call(this, props));

    _this.limitIsOK = function (that, iframeWrap, images, limit) {
      var limit_width = limit && limit.width || "auto";
      var limit_height = limit && limit.height || "auto";
      var limit_suffix = limit && limit.suffix || ["jpg", "jpeg", "png", "bmp", "gif"];
      var limit_size = limit && limit.size || 5;

      var img_width = images.width;
      var img_height = images.height;
      var img_suffix = images.type;
      var img_size = images.size;
      img_size = parseFloat(img_size / (1024 * 1024)).toFixed(2);

      //限制图片尺寸
      if (typeof limit_width == 'number' && limit_width != img_width || typeof limit_height == 'number' && limit_height != img_height) {
        var _message = (0, _stringify2.default)({ event: "show-message", msg: "请上传图片尺寸为" + limit_width + "*" + limit_height + "的图片" });
        iframeWrap.contentWindow.postMessage(_message, "*");
        return false;
      }
      //限制图片大小
      if (img_size >= limit_size) {
        var message = (0, _stringify2.default)({ event: "show-message", msg: "图片的大小不能超过" + limit_size + "M！" });
        iframeWrap.contentWindow.postMessage(message, "*");
        return false;
      }

      //限制图片格式
      var isSuitable = false; //格式不符合要求
      for (var i = 0; i < limit_suffix.length; i++) {
        if (img_suffix.toLowerCase() == limit_suffix[i].toLowerCase()) {
          isSuitable = true;
        }
      }

      if (!isSuitable) {
        var message = (0, _stringify2.default)({ event: "show-message", msg: "请上传" + limit_suffix.join("/") + "格式图片" });
        iframeWrap.contentWindow.postMessage(message, "*");
        return false;
      }

      return true;
    };

    _this.onRemove = function () {
      //更新图片
      if (_this.props.onRemove && typeof _this.props.onRemove == 'function') {
        _this.props.onRemove({ url: _this.state.imgUrl });
      }
      _this.setState({
        imgUrl: undefined
      });
    };

    _this.renderChildren = function () {
      if (_this.props.children) {
        return _this.props.children;
      } else if (_this.state.imgUrl && _this.state.imgUrl.length > 0) {
        return _react2.default.createElement('img', { src: _this.state.imgUrl, alt: '' });
      } else {
        return "";
      }
    };

    _this.renderFooter = function () {
      if (_this.state.imgUrl && _this.state.imgUrl.length > 0) {
        //重新上传
        if (_this.props.showRemoveIcon) {
          return _react2.default.createElement(
            'div',
            { className: 'upload-select-footer' },
            _react2.default.createElement(
              'div',
              { className: 'upload-select-btn', onClick: _this.showContent },
              '\u91CD\u65B0\u4E0A\u4F20'
            ),
            _react2.default.createElement(
              'div',
              { className: 'upload-select-removebtn', onClick: _this.onRemove },
              '\u5220\u9664'
            )
          );
        } else {
          return _react2.default.createElement(
            'div',
            { className: 'upload-select-footer' },
            _react2.default.createElement(
              'div',
              { className: 'upload-select-btn', onClick: _this.showContent },
              '\u91CD\u65B0\u4E0A\u4F20'
            )
          );
        }
      } else {
        return _react2.default.createElement(
          'div',
          { className: 'upload-select-defaultbtn', onClick: _this.showContent },
          _react2.default.createElement(_icon2.default, { type: 'plus', className: 'upload-plus' }),
          ' ',
          _react2.default.createElement('br', null),
          '\u4E0A\u4F20\u56FE\u7247'
        );
      }
    };

    _this.handleCancel = function () {
      _this.setState({ visible: false });
    };

    _this.showContent = function () {
      _this.setState({
        visible: true
      });
    };

    var param = "";
    if (!props.multiple) {
      param = "?single=1";
    }
    _this.state = {
      multiple: props.multiple,
      visible: false,
      iframeId: "iframe" + Math.random().toString(36).substr(3),
      iframeDomain: "",
      iframeUrl: "/photo-space-view/html/select.html" + param,
      imgUrl: props.imgUrl
    };
    return _this;
  }

  (0, _createClass3.default)(UploadSelect, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        imgUrl: nextProps.imgUrl
      });
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.getIframeDomain();
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var that = this;
      if (window) {
        window.addEventListener("message", function (e) {

          var data = e.data;
          var iframeWrap = document.getElementById(that.state.iframeId);
          if (typeof data == "string") {
            data = JSON.parse(data.toString());
          }

          if (data.event == "close") {
            that.setState({ visible: false });
          } else if (data.event == "select-images") {

            var isOK = true; //所选图片满足要求

            if (!data.images || data.images instanceof Array && data.images.length <= 0) {
              isOK = false;
              if (iframeWrap) {
                var message = (0, _stringify2.default)({ event: "show-message", msg: "请选择图片！" });
                iframeWrap.contentWindow.postMessage(message, "*");
              }
              return false;
            } else if (data.images instanceof Array && iframeWrap) {
              //如果是多图
              for (var i = 0; i < data.images.length; i++) {
                isOK = that.limitIsOK(that, iframeWrap, data.images[i], that.props.limit);
                if (!isOK) {
                  break;
                }
              }
            } else if (data.images instanceof Object && iframeWrap) {
              //如果是单图
              isOK = that.limitIsOK(that, iframeWrap, data.images, that.props.limit);
            }

            //如果图片满足要求
            if (isOK && iframeWrap) {

              iframeWrap.contentWindow.postMessage((0, _stringify2.default)({ event: "close" }), "*");

              //更新图片
              if (that.props.onChange && typeof that.props.onChange == 'function') {
                that.props.onChange(data.images);
              }

              //关闭弹窗
              that.setState({
                visible: false
              });

              if (!that.state.multiple) {
                //单图的话，回显图片
                that.setState({
                  imgUrl: data.images.url
                });
              }
            }
          }
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var wrapClassName = 'upload-select-wrap ' + this.props.className;
      if (this.state.imgUrl && this.state.imgUrl.length > 0) {
        wrapClassName += ' solid-border';
      }
      return _react2.default.createElement(
        'div',
        { key: this.state.iframeId, className: wrapClassName, style: this.props.style },
        _react2.default.createElement(
          'div',
          { className: 'upload-select-box' },
          this.renderChildren(),
          this.renderFooter()
        ),
        _react2.default.createElement(
          _modal2.default,
          {
            visible: this.state.visible,
            title: '\u4E0A\u4F20',
            footer: null,
            width: 660,
            style: { top: 20 },
            onCancel: this.handleCancel,
            wrapClassName: 'upload-select-iframe'
          },
          this.state.visible ? _react2.default.createElement('iframe', { id: this.state.iframeId,
            src: this.state.iframeDomain + this.state.iframeUrl,
            frameborder: '0' }) : _react2.default.createElement(_spin2.default, null)
        )
      );
    }

    //移除


    //弹窗右上部关闭按钮

  }, {
    key: 'getIframeDomain',


    //获取域名
    value: function getIframeDomain() {
      var _this2 = this;

      var client = new _ApiClient2.default(null, null, null, true);
      client.get('/passport/logout').then(function (res) {
        if (res.code == 0 && res.data) {
          res.data.map(function (_item) {
            if (_item.domainType == 12) {
              var iframeDomain = '//' + _item.domain;
              _this2.setState({ iframeDomain: iframeDomain });
            }
          });
        }
      }, function (err) {});
    }

    //打开弹窗

  }]);
  return UploadSelect;
}(_react.Component);

exports.default = UploadSelect;
module.exports = exports['default'];
//# sourceMappingURL=UploadSelect.js.map