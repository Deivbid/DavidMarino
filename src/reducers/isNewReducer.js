import { IS_NEW } from '../actions/types';
export const isNewReducer = (state = false, action) => {
  const { type, payload } = action
  if(type === IS_NEW){
   	return payload
  }
  return state
}