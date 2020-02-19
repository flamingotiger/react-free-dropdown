import * as React from 'react';
import GlobalStyle from '../common/global-styles';
import StatusChangeContextProvider from './status-change-provider';

const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<>
			<GlobalStyle />
			<StatusChangeContextProvider>{children}</StatusChangeContextProvider>
		</>
	);
};

export default StoreProvider;
