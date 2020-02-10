import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import Rfdd from '../view/Rfdd';
import RfddOption from '../view/RfddOption';

afterEach(cleanup);

describe('<Rfdd/>', () => {
	it('matches snapshot', () => {
		const { container } = render(
			<Rfdd>
				<RfddOption value="🍎Apple">Apple</RfddOption>
				<RfddOption value="🥕Carrot">Carrot</RfddOption>
			</Rfdd>
		);
		expect(container).toMatchSnapshot();
	});
	it('it displays default RfddOption items', () => {
		const { getByTestId } = render(
			<Rfdd>
				<RfddOption value="🍎Apple">Apple</RfddOption>
				<RfddOption value="🥕Carrot">Carrot</RfddOption>
			</Rfdd>
		);
		const optionList = getByTestId('list');
		expect(optionList.children.length).toBe(2);
	});
	it('shows the props correctly', () => {
		const { getByText } = render(
			<Rfdd>
				<RfddOption value="🍎Apple">Apple</RfddOption>
				<RfddOption value="🥕Carrot">Carrot</RfddOption>
			</Rfdd>
		);
		getByText('Apple');
		getByText('Carrot');
	});
	it('dropdown focus and Blur', () => {
		const { getByTestId } = render(
			<Rfdd>
				<RfddOption value="🍎Apple">Apple</RfddOption>
				<RfddOption value="🥕Carrot">Carrot</RfddOption>
			</Rfdd>
		);
		const select = getByTestId('select');
		const list = getByTestId('list');
		const rfdd = getByTestId('rfdd');
		fireEvent.click(select);
		expect(list).toHaveStyle('max-height: 100px');
		fireEvent.blur(rfdd);
		expect(list).toHaveStyle('max-height: 0');
	});
	it('select RfddOption after focus', () => {
		const { getByTestId } = render(
			<Rfdd>
				<RfddOption value="🍎Apple">Apple</RfddOption>
				<RfddOption value="🥕Carrot">Carrot</RfddOption>
			</Rfdd>
		);
		const select = getByTestId('select');
		const selectText = getByTestId('select-text');
		const option0 = getByTestId('option0');
		fireEvent.click(select);
		fireEvent.click(option0);
		expect(selectText.innerHTML).toBe('🍎Apple');
		const option1 = getByTestId('option1');
		fireEvent.click(option1);
		expect(selectText.innerHTML).toBe('🥕Carrot');
	});
	it('optionStyle property', () => {
		const { getByTestId } = render(
			<Rfdd optionStyle="border: 1px solid red;">
				<RfddOption value="🍎Apple">Apple</RfddOption>
				<RfddOption value="🥕Carrot">Carrot</RfddOption>
			</Rfdd>
		);
		const option0 = getByTestId('option0');
		expect(option0).toHaveStyle('border: 1px solid red;');
	});
	it('each RfddOption style', () => {
		const { getByTestId } = render(
			<Rfdd>
				<RfddOption value="🍎Apple" style={{ backgroundColor: 'red' }}>
					Apple
				</RfddOption>
				<RfddOption value="🥕Carrot" style={{ backgroundColor: 'orange' }}>
					Carrot
				</RfddOption>
			</Rfdd>
		);
		const option0 = getByTestId('option0');
		expect(option0).toHaveStyle('background-color: red;');
		const option1 = getByTestId('option1');
		expect(option1).toHaveStyle('background-color: orange;');
	});
});
