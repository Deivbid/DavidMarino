import { UPDATE_SENT_LIST } from '../actions/types';

const initialState = {
	list: []
}

export const addSentListReducer = (state = initialState, action) => {
  const { type, payload } = action
  if(type === UPDATE_SENT_LIST){
    return {
    	...state,
    	list: payload
    }
  }
  return state
}