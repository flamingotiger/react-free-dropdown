import React from 'react';
import Rfdd from '../../../src/view/Rfdd';
import RfddOption from '../../../src/view/RfddOption';

const DropDownBasic: React.FC<{ mode: 'light' | 'dark' }> = ({ mode }) => {
	const [value, setValue] = React.useState<string>('');
	return (
		<Rfdd onChange={(optionValue: string): void => setValue(optionValue)} value={value} mode={mode}>
			<RfddOption value="🍎Apple">
				<span role="img" aria-label="Apple">
					🍎
				</span>
				Apple
			</RfddOption>
			<RfddOption value="🥕Carrot">
				<span role="img" aria-label="Carrot">
					🥕
				</span>
				Carrot
			</RfddOption>
			<RfddOption value="🍌Banana">
				<span role="img" aria-label="Banana">
					🍌
				</span>
				Banana
			</RfddOption>
			<RfddOption value="🍇Grape">
				<span role="img" aria-label="Grape">
					🍇
				</span>
				Grape
			</RfddOption>
			<RfddOption value="🍊Orange">
				<span role="img" aria-label="Orange">
					🍊
				</span>
				Orange
			</RfddOption>
		</Rfdd>
	);
};

export default DropDownBasic;
