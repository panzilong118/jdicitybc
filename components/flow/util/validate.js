
import getType from 'uc-fun/getType';

/**
 *  call function is function is valide
 */
export const validFunc = (func, ...args) => (
  getType(func) === 'Function' && func(...args)
);


export const valideFromValues = ({ from: { validateFields } }) => {
  let result = null;
  validateFields((err, values) => {
    if (!err) {
      result = values;
    }
  });
  return result;
};

export const isEmptyArr = (arr) => !(
  getType(arr) === 'Array' && arr.length > 0
);
