import { OPEN_SNACKBAR } from '../actions/types';

export const openSnackbarReducer = (state = false, action) => {
  const { type, payload } = action
  if(type === OPEN_SNACKBAR){
   	return payload
  }
  return state
}