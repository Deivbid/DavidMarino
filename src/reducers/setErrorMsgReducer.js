import { ERROR_MESSAGE } from '../actions/types';

export const setErrorMsgReducer = (state = '', action) => {
  const { type, payload } = action
  if(type === ERROR_MESSAGE){
   	return payload
  }
  return state
}