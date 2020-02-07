import * as React from 'react';
import getLayoutReducer, { GetLayoutDispatchContext, getLayoutState, GetLayoutStateContext } from './get-layout';

const GetLayoutContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [state, dispatch] = React.useReducer(getLayoutReducer, getLayoutState);
	return (
		<GetLayoutDispatchContext.Provider value={dispatch}>
			<GetLayoutStateContext.Provider value={state}>{children}</GetLayoutStateContext.Provider>
		</GetLayoutDispatchContext.Provider>
	);
};
export default GetLayoutContextProvider;
