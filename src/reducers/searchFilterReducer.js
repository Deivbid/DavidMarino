import { UPDATE_SEARCH } from '../actions/types';
export const searchFilterReducer = (state = '', action) => {
  const { type, payload } = action
  if(type === UPDATE_SEARCH){
   	return payload
  }
  return state
}