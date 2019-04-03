import * as React from "react";

import glob from 'glob';

import { render } from 'enzyme';

export default function demoTest(component, options = {}) {
  const files = glob.sync(`./components/${component}/demo/*.js`);

  files.forEach((file) => {
    describe(`renders ${file} correctly`, () => {
      it('test', () => {
          let Comp = require(`../.${file}`).default;
          const wrapper = render(<Comp />);
          // let Demo = render(<Comp />);
          // let snapsDemo = Demo.toJSON();
          expect(wrapper).toMatchSnapshot();
      });
    });
  });
}
