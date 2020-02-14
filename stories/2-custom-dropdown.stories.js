import React from 'react';
import { storiesOf } from '@storybook/react';
import CustomDropDown from './src/custom-style/custom-style';
import RfddOption from '../src/view/RfddOption';
import Rfdd from '../src/view/Rfdd';

storiesOf('custom-style', module)
	.add('custom select style and option style', () => (
		<CustomDropDown mode="light" selectStyle={{ border: '1px solid red' }} optionStyle="border: 1px solid red" />
	))
	.add('custom hover style', () => <CustomDropDown mode="light" hoverStyle="background: purple" />)
	.add('each custom option style', () => {
		const [backgroundColor, setBackgroundColor] = React.useState('');
		const [color, setColor] = React.useState('');
		return (
			<Rfdd selectStyle={{ backgroundColor, color }}>
				<RfddOption
					value="🍎Apple"
					style={{ backgroundColor: 'red', color: '#fff' }}
					onClick={() => {
						setBackgroundColor('red');
						setColor('#fff');
					}}
				>
					🍎 Apple
				</RfddOption>
				<RfddOption
					value="🥕Carrot"
					style={{ backgroundColor: 'orange', color: '#fff' }}
					onClick={() => {
						setBackgroundColor('orange');
						setColor('#fff');
					}}
				>
					🥕 Carrot
				</RfddOption>
				<RfddOption
					value="🍌Banana"
					style={{ backgroundColor: 'yellow', color: '#000' }}
					onClick={() => {
						setBackgroundColor('yellow');
						setColor('#000');
					}}
				>
					🍌 Banana
				</RfddOption>
				<RfddOption
					value="🍇Grape"
					style={{ backgroundColor: 'purple', color: '#fff' }}
					onClick={() => {
						setBackgroundColor('purple');
						setColor('#fff');
					}}
				>
					🍇 Grape
				</RfddOption>
				<RfddOption
					value="🍊Orange"
					style={{ backgroundColor: 'orange', color: '#fff' }}
					onClick={() => {
						setBackgroundColor('orange');
						setColor('#fff');
					}}
				>
					🍊 Orange
				</RfddOption>
			</Rfdd>
		);
	})
	.add('custom style', () => (
		<CustomDropDown
			mode="light"
			selectStyle={{
				border: '1px solid rgb(209,60,120)',
				borderRadius: '4px',
				backgroundColor: 'rgb(209,60,120)',
				color: 'white',
				fontWeight: 'bold'
			}}
			hoverStyle="background-color: rgb(209,60,120); color: #fff; font-weight: bold;"
			optionStyle="border-radius: 4px"
		/>
	))
	.add('bigger dropdown', () => {
		return (
			<CustomDropDown
				mode="light"
				selectStyle={{ width: '300px', height: '100px', fontSize: '20px' }}
				optionStyle={{ width: '300px', height: '100px', fontSize: '20px' }}
			/>
		);
	});
