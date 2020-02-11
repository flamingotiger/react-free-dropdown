import React from 'react';
import Rfdd from '../../../src/view/Rfdd';
import RfddOption from '../../../src/view/RfddOption';

const IconCustom: React.FC<{ icon: any; hiddenIcon: boolean }> = ({ icon, hiddenIcon }) => {
	const [value, setValue] = React.useState<string>('');
	return (
		<Rfdd
			onChange={(optionValue: string): void => setValue(optionValue)}
			value={value}
			icon={icon}
			hiddenIcon={hiddenIcon}
		>
			<RfddOption value="test1">test1</RfddOption>
			<RfddOption value="test2">test2</RfddOption>
		</Rfdd>
	);
};

export default IconCustom;
