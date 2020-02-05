import React from 'react';
import styled from 'styled-components';
import Rfdd from '../view/Rfdd';
import RfddOption from '../view/RfddOption';

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
				<img src="../assets/RFDD_logo.png" alt="react free fropdown logo" />
			</p>
			<h1>Free Drop Down</h1>
			<ExampleStyle>
				<Rfdd
					onChange={(optionValue: string): void => setValue(optionValue)}
					value={value}
					style={{ width: '120px', height: '30px' }}
					mode="light"
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
				<Rfdd
					onChange={(optionValue: string): void => setValue(optionValue)}
					value={value}
					style={{ width: '120px', height: '30px' }}
					mode="dark"
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
