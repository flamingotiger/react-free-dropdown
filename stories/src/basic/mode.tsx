import React from 'react';
import Rfdd, { RFDDOption } from '../../../src/Rfdd';

const DropDownBasic: React.FC<{ mode: 'light' | 'dark' }> = ({ mode }) => {
	const [value, setValue] = React.useState<string>('');
	return (
		<Rfdd
			onChange={(optionValue: string): void => setValue(optionValue)}
			value={value}
			style={{ width: '120px', height: '30px' }}
			mode={mode}
		>
			<RFDDOption value="🍎Apple">
				<span role="img" aria-label="Apple">
					🍎
				</span>
				Apple
			</RFDDOption>
			<RFDDOption value="🥕Carrot">
				<span role="img" aria-label="Carrot">
					🥕
				</span>
				Carrot
			</RFDDOption>
			<RFDDOption value="🍌Banana">
				<span role="img" aria-label="Banana">
					🍌
				</span>
				Banana
			</RFDDOption>
			<RFDDOption value="🍇Grape">
				<span role="img" aria-label="Grape">
					🍇
				</span>
				Grape
			</RFDDOption>
			<RFDDOption value="🍊Orange">
				<span role="img" aria-label="Orange">
					🍊
				</span>
				Orange
			</RFDDOption>
		</Rfdd>
	);
};

export default DropDownBasic;
