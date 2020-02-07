import * as React from 'react';
import { Provider } from 'react-redux';
import store from './store-setup';
import GlobalStyle from '../common/global-styles';

const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<>
			<GlobalStyle />
			<Provider store={store}>{children}</Provider>
		</>
	);
};

export default StoreProvider;
