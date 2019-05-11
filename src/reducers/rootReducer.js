import { combineReducers } from 'redux';
import { loginReducer, messageReducer } from './inputReducer';
import { openSnackbarReducer } from './openSnackbarReducer';
import { setErrorMsgReducer } from './setErrorMsgReducer';
import { paginatorReducer } from './paginatorReducer';
import { searchFilterReducer } from './searchFilterReducer';
import { addSentListReducer } from './addSentListReducer';
import { isNewReducer } from './isNewReducer';

export default combineReducers({
 login: loginReducer,
 isSnackbarOpen: openSnackbarReducer,
 errorMsg: setErrorMsgReducer,
 currentPage: paginatorReducer,
 searchFilter: searchFilterReducer,
 message: messageReducer,
 sentList: addSentListReducer,
 isNew: isNewReducer
});