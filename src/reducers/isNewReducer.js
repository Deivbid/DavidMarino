import { IS_NEW, IS_SENT } from '../actions/types';

export const isNewReducer = (state = false, action) => {
  const { type, payload } = action
  if(type === IS_NEW){
   	return payload
  }
  return state
}

export const isSentReducer = (state = false, action) => {
  const { type, payload } = action
  if(type === IS_SENT){
   	return payload
  }
  return state
}