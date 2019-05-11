import { IS_NEW } from './types';

export const isNew = (flag) => {
  return {
    type: IS_NEW,
    payload: flag,
  }
}