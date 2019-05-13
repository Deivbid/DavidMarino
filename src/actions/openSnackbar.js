import { OPEN_SNACKBAR } from './types';

export const openSnackbar = (flag) => {
  return {
    type: OPEN_SNACKBAR,
    payload: flag
  }
}
