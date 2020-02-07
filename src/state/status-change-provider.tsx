import * as React from 'react';
import statusChangeReducer, {
	StatusChangeDispatchContext,
	statusChangeState,
	StatusChangeStateContext
} from './status-change';

const StatusChangeContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [state, dispatch] = React.useReducer(statusChangeReducer, statusChangeState);
	return (
		<StatusChangeDispatchContext.Provider value={dispatch}>
			<StatusChangeStateContext.Provider value={state}>{children}</StatusChangeStateContext.Provider>
		</StatusChangeDispatchContext.Provider>
	);
};

export default StatusChangeContextProvider;
