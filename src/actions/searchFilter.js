import { UPDATE_SEARCH } from './types';

export const searchFilter = (text) => {
  return {
  	type: UPDATE_SEARCH,
  	payload: text
  }
}

