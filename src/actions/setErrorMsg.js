import { ERROR_MESSAGE } from './types';

export const setErrorMsg = (msg) => {
  return {
    type: ERROR_MESSAGE,
    payload: msg,
  }
}