import React from 'react';
import Rfdd from '../../../src/view/Rfdd';
import RfddOption from '../../../src/view/RfddOption';

const CustomDropDown: React.FC<{
	mode: 'light' | 'dark';
	selectStyle: React.CSSProperties;
	focusStyle: React.CSSProperties;
	hoverStyle: string;
	optionStyle: string;
}> = ({ mode, focusStyle, selectStyle, hoverStyle, optionStyle }) => {
	const [value, setValue] = React.useState<string>('');
	return (
		<Rfdd
			onChange={(optionValue: string): void => setValue(optionValue)}
			value={value}
			mode={mode}
			focusStyle={focusStyle}
			selectStyle={selectStyle}
			hoverStyle={hoverStyle}
			optionStyle={optionStyle}
		>
			<RfddOption value="🍎Apple">🍎 Apple</RfddOption>
			<RfddOption value="🥕Carrot">🥕 Carrot</RfddOption>
			<RfddOption value="🍌Banana">🍌 Banana</RfddOption>
			<RfddOption value="🍇Grape">🍇 Grape</RfddOption>
			<RfddOption value="🍊Orange">🍊 Orange</RfddOption>
		</Rfdd>
	);
};

export default CustomDropDown;
