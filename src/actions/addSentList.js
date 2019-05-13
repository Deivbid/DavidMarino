import { UPDATE_SENT_LIST } from './types';

export const addSentList = (obj) => dispatch => {
  dispatch({
  	type: UPDATE_SENT_LIST,
  	payload: obj
  });
}

