import React from 'react';
import { storiesOf } from '@storybook/react';
import DropDownBasic from './src/basic/mode';

storiesOf('drop-down-basic', module)
	.add('light mode', () => <DropDownBasic mode="light" />)
	.add('dark mode', () => <DropDownBasic mode="dark" />);
