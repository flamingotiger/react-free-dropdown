import React from 'react';
import Rfdd from '../../../lib/view/Rfdd';
import RfddOption from '../../../lib/view/RfddOption';

const DropDownBasic: React.FC<{ mode: 'light' | 'dark' }> = ({ mode }) => {
	const [value, setValue] = React.useState<string>('');
	return (
		<Rfdd
			onChange={(optionValue: string): void => setValue(optionValue)}
			value={value}
			style={{ width: '120px', height: '30px' }}
			mode={mode}
		>
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
