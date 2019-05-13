import { PAGINATOR } from '../actions/types';

export const paginatorReducer = (state = 1, action) => {
  const { type, payload } = action
  if(type === PAGINATOR){
   	return payload
  }
  return state
}