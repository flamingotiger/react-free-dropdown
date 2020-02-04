import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import Rfdd, { RFDDOption } from '../Rfdd';

afterEach(cleanup);

describe('<Rfdd/>', () => {
	test('matches snapshot', () => {
		const { container } = render(
			<Rfdd>
				<RFDDOption value="🍎Apple">Apple</RFDDOption>
				<RFDDOption value="🥕Carrot">Carrot</RFDDOption>
			</Rfdd>
		);
		expect(container).toMatchSnapshot();
	});
	test('it displays default option items', () => {
		const { getByTestId } = render(
			<Rfdd>
				<RFDDOption value="🍎Apple">Apple</RFDDOption>
				<RFDDOption value="🥕Carrot">Carrot</RFDDOption>
			</Rfdd>
		);
		const optionList = getByTestId('list');
		expect(optionList.children.length).toBe(2);
	});
	test('shows the props correctly', () => {
		const { getByText } = render(
			<Rfdd>
				<RFDDOption value="🍎Apple">Apple</RFDDOption>
				<RFDDOption value="🥕Carrot">Carrot</RFDDOption>
			</Rfdd>
		);
		getByText('Apple');
		getByText('Carrot');
	});
	test('focus and Blur', () => {
		const { getByTestId } = render(
			<Rfdd>
				<RFDDOption value="🍎Apple">Apple</RFDDOption>
				<RFDDOption value="🥕Carrot">Carrot</RFDDOption>
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
	test('select options after focus', () => {
		const { getByTestId } = render(
			<Rfdd>
				<RFDDOption value="🍎Apple">Apple</RFDDOption>
				<RFDDOption value="🥕Carrot">Carrot</RFDDOption>
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
});
