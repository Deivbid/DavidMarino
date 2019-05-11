import { IS_NEW, IS_SENT } from './types';

export const isNew = (flag) => {
  return {
    type: IS_NEW,
    payload: flag,
  }
}

export const isSent = (flag) => {
  return {
    type: IS_SENT,
    payload: flag,
  }
}