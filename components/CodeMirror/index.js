/**
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
import React from 'react';
import codemirror from 'codemirror';
import { debounce } from 'lodash';
import './style/index.less';

require('codemirror/mode/sql/sql');
require('codemirror/mode/shell/shell');
require('codemirror/addon/display/placeholder');

export default class CodeMirror extends React.Component {
  static defaultProps = {
    useFocus: true
  }

  componentDidMount() {
    this.paste = '';
    const {
      onChange, options, value = '', onScroll
    } = this.props;

    this.editor = codemirror(this.ref, { ...options, value });
    const { editor, setCursor } = this;

    setCursor(editor, true);
    const changeDelay = debounce((e) => {
      setCursor(e);
      onChange && onChange(e.getValue());
    }, 300);
    editor.on('change', changeDelay);
    editor.on('blur', (e) => {
      setCursor(e);
    });
    onScroll && editor.on('scroll', onScroll);
  }

  shouldComponentUpdate({ paste = '', value = '', }) {
    // const { readOnly } = options;
    const { editor } = this;
    // const { useFocus } = this.props;

    // const focus = () => {
    //   if (readOnly) return;
    //   if (!useFocus) return;
    //   editor.focus();
    //   editor.setCursor({ ...this.cursor }, readOnly);
    // };

    if (paste !== this.paste) {
      this.focus();
      editor.replaceSelection(` ${paste}`);
      this.paste = paste;
    } else if (value !== editor.getValue()) {
      editor.setOption('value', value);

      editor.setValue(value);
      this.fixBottom();
      this.focus();
    }
    return false;
  }

  setCursor = (editor, toEnd) => {
    const { line, ch } = editor.doc.getCursor();
    this.cursor = { ch, line: toEnd ? line + 1 : line };
  }

  focus() {
    const { editor } = this;
    const { options: { readOnly }, useFocus } = this.props;
    if (readOnly) return;
    if (!useFocus) return;
    editor.focus();
    editor.setCursor({ ...this.cursor }, readOnly);
  }

  fixBottom() {
    const { fixBottom } = this.props;
    if (!fixBottom) return;

    const { editor } = this;
    const { height } = editor.getScrollInfo();
    editor.scrollTo(0, height);
  }

  render() {
    const { className, options: { readOnly } } = this.props;
    return (
      <div
        className={`${className} ${readOnly && 'readOnly'}`}
        ref={(self) => { this.ref = self; }}
      />
    );
  }
}
