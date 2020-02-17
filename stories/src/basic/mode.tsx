import React from 'react';
import Rfdd from '../../../src/view/Rfdd';
import RfddOption from '../../../src/view/RfddOption';

const DropDownBasic: React.FC<{ mode: 'light' | 'dark' }> = ({ mode }) => {
	const [value, setValue] = React.useState<string>('');
	return (
		<Rfdd onChange={(optionValue: string): void => setValue(optionValue)} value={value} mode={mode}>
			<RfddOption value="🍎Apple">🍎 Apple</RfddOption>
			<RfddOption value="🥕Carrot">🥕 Carrot</RfddOption>
			<RfddOption value="🍌Banana">🍌 Banana</RfddOption>
			<RfddOption value="🍇Grape">🍇 Grape</RfddOption>
			<RfddOption value="🍊Orange">🍊 Orange</RfddOption>
		</Rfdd>
	);
};

export default DropDownBasic;
