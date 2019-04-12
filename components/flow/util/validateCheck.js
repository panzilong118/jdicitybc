import isBigger from 'uc-fun/isBigger';

export const INVALID_IDX = -1;
export const valideIdxCheck = num => {
  if (!num && num !== 0) {
    return false;
  }
  return isBigger(num, INVALID_IDX);
};
