import React from 'react';
import StoreProvider from '../../state/StoreProvider';
import RfddWrap from '../RfddWrap';
import { RfddPropsType } from '../../types';

const Rfdd: React.FC<RfddPropsType> = props => {
	return (
		<StoreProvider>
			<RfddWrap {...props}>
				{props.children}
			</RfddWrap>
		</StoreProvider>
	);
};

export default Rfdd;
