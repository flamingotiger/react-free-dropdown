import * as React from 'react';
import GlobalStyle from '../common/global-styles';
import GetLayoutContextProvider from './get-layout-provider';
import StatusChangeContextProvider from './status-change-provider';

const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<>
			<GlobalStyle />
			<GetLayoutContextProvider>
				<StatusChangeContextProvider>{children}</StatusChangeContextProvider>
			</GetLayoutContextProvider>
		</>
	);
};

export default StoreProvider;
