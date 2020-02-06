import { combineReducers } from 'redux';
import getLayout from './get-layout';
import statusChange from './status-change';

const rootReducer = combineReducers({
	getLayout,
	statusChange
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
