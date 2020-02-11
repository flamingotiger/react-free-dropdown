import React from 'react';
import { storiesOf } from '@storybook/react';
import IconCustom from './src/custom-style/icon-custom';
import IconPng from './src/static/dummy-png.png';
import IconSVG from './src/static/dummy-svg.svg';

storiesOf('icon custom', module)
	.add('hidden icon', () => <IconCustom hiddenIcon />)
	.add('use png icon', () => <IconCustom icon={IconPng} />)
	.add('use svg icon', () => <IconCustom icon={IconSVG} />);
