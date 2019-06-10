'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _codemirror = require('codemirror');

var _codemirror2 = _interopRequireDefault(_codemirror);

var _lodash = require('lodash');

require('./style/index.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * beautify|format code style
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * usage:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  <CodeMirror
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *    fixBottom
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *    className="text-list"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *    value={cmdLogs.join('\n')}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *    ref={el => autoScrollTo(el, true)}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *    options={{
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      ...CODE_MIRROR_OPTION.beautify,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      mode: 'shell'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *    }}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


require('codemirror/mode/sql/sql');
require('codemirror/mode/shell/shell');
require('codemirror/addon/display/placeholder');

var CodeMirror = function (_React$Component) {
  _inherits(CodeMirror, _React$Component);

  function CodeMirror() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CodeMirror);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CodeMirror.__proto__ || Object.getPrototypeOf(CodeMirror)).call.apply(_ref, [this].concat(args))), _this), _this.setCursor = function (editor, toEnd) {
      var _editor$doc$getCursor = editor.doc.getCursor(),
          line = _editor$doc$getCursor.line,
          ch = _editor$doc$getCursor.ch;

      _this.cursor = { ch: ch, line: toEnd ? line + 1 : line };
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CodeMirror, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.paste = '';
      var _props = this.props,
          onChange = _props.onChange,
          options = _props.options,
          _props$value = _props.value,
          value = _props$value === undefined ? '' : _props$value,
          onScroll = _props.onScroll;


      this.editor = (0, _codemirror2.default)(this.ref, _extends({}, options, { value: value }));
      var editor = this.editor,
          setCursor = this.setCursor;


      setCursor(editor, true);
      var changeDelay = (0, _lodash.debounce)(function (e) {
        setCursor(e);
        onChange && onChange(e.getValue());
      }, 300);
      editor.on('change', changeDelay);
      editor.on('blur', function (e) {
        setCursor(e);
      });
      onScroll && editor.on('scroll', onScroll);
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(_ref2) {
      var _ref2$paste = _ref2.paste,
          paste = _ref2$paste === undefined ? '' : _ref2$paste,
          _ref2$value = _ref2.value,
          value = _ref2$value === undefined ? '' : _ref2$value;

      // const { readOnly } = options;
      var editor = this.editor;
      // const { useFocus } = this.props;

      // const focus = () => {
      //   if (readOnly) return;
      //   if (!useFocus) return;
      //   editor.focus();
      //   editor.setCursor({ ...this.cursor }, readOnly);
      // };

      if (paste !== this.paste) {
        this.focus();
        editor.replaceSelection(' ' + paste);
        this.paste = paste;
      } else if (value !== editor.getValue()) {
        editor.setOption('value', value);

        editor.setValue(value);
        this.fixBottom();
        this.focus();
      }
      return false;
    }
  }, {
    key: 'focus',
    value: function focus() {
      var editor = this.editor;
      var _props2 = this.props,
          readOnly = _props2.options.readOnly,
          useFocus = _props2.useFocus;

      if (readOnly) return;
      if (!useFocus) return;
      editor.focus();
      editor.setCursor(_extends({}, this.cursor), readOnly);
    }
  }, {
    key: 'fixBottom',
    value: function fixBottom() {
      var fixBottom = this.props.fixBottom;

      if (!fixBottom) return;

      var editor = this.editor;

      var _editor$getScrollInfo = editor.getScrollInfo(),
          height = _editor$getScrollInfo.height;

      editor.scrollTo(0, height);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props3 = this.props,
          className = _props3.className,
          readOnly = _props3.options.readOnly;

      return _react2.default.createElement('div', {
        className: className + ' ' + (readOnly && 'readOnly'),
        ref: function ref(self) {
          _this2.ref = self;
        }
      });
    }
  }]);

  return CodeMirror;
}(_react2.default.Component);

CodeMirror.defaultProps = {
  useFocus: true
};
exports.default = CodeMirror;
//# sourceMappingURL=index.js.map