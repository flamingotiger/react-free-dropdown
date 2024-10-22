import * as React from 'react';
import StoreProvider from '../state/StoreProvider';
import RfddWrap from './RfddWrap';
import { RfddProps } from '../types';

const Rfdd: React.FC<RfddProps> = props => {
	return (
		<StoreProvider>
			{/* eslint-disable-next-line react/destructuring-assignment,react/jsx-props-no-spreading */}
			<RfddWrap {...props}>{props.children}</RfddWrap>
		</StoreProvider>
	);
};

export default Rfdd;
