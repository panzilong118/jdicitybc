
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import DatePicker from '..';
import focusTest from '../../../__tests__/shared/focusTest';

const { MonthPicker } = DatePicker;

describe('MonthPicker', () => {
  focusTest(MonthPicker);
});
