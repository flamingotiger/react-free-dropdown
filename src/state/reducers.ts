import { combineReducers } from 'redux';
import getLayout from './get-layout';

const rootReducer = combineReducers({
	getLayout
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
