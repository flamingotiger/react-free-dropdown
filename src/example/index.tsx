import React from 'react';
import styled from 'styled-components';
import Rfdd, { RFDDOption } from '../Rfdd';

const ExampleStyle = styled.div`
	display: flex;
	margin-bottom: 20px;
	width: 250px;
	justify-content: space-between;
	align-items: center;
`;

const Example: React.FC = () => {
	const [value, setValue] = React.useState<string>('');
	return (
		<>
			<p>
				<img src="../../public/RFDD_logo.png" alt="react free fropdown logo" />
			</p>
			<h1>Free Drop Down</h1>
			<ExampleStyle>
				<Rfdd
					onChange={(optionValue: string): void => setValue(optionValue)}
					value={value}
					style={{ width: '120px', height: '30px' }}
					mode="white"
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
				<Rfdd
					onChange={(optionValue: string): void => setValue(optionValue)}
					value={value}
					style={{ width: '120px', height: '30px' }}
					mode="dark"
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
			</ExampleStyle>
			<div>
				<b>
					value:
					{value}
				</b>
			</div>
		</>
	);
};

export default Example;
