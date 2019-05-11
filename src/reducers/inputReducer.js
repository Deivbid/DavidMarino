import { INPUT_UPDATE } from '../actions/types';
import { combineReducers } from 'redux';

export const loginInitialState = {
  email: '',
  password: '',

  mName:'',
  mSubject:'',
  mText:'',
  mId:''
}

export const inputReducerFor = (scope) => {
  const inputReducer = (state = '', action) => {
    const { type, payload } = action

    switch (type) {
      case `${scope}_${INPUT_UPDATE}`:
        return payload
      default: return state
    }
  }

  return inputReducer
}

export const loginReducer = combineReducers({
  email: inputReducerFor('LOGIN_EMAIL'),
  password: inputReducerFor('LOGIN_PASSWORD'),
})

export const messageReducer = combineReducers({
  mName: inputReducerFor('MESSAGE_NAME'),
  mSubject: inputReducerFor('MESSAGE_SUBJECT'),
  mText:inputReducerFor('MESSAGE_TEXT'),
  mId: inputReducerFor('MESSAGE_ID') 
})