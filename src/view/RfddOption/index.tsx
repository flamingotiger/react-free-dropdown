import React from 'react';
import styled from 'styled-components';
import { RFDDOptionType } from 'types';
import color from 'common/styles';

const RFDDOptionStyle = {
	Wrapper: styled.div`
		width: 100%;
		cursor: pointer;
		list-style: none;
		padding: 8px;
		box-sizing: border-box;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
		font-size: 12px;
		line-height: 12px;
		&:hover {
			background-color: ${color.keyColor};
			color: #ffffff;
		}
	`
};
const RFDDOption: React.FC<RFDDOptionType> = props => {
	const { value, children, onChange, index } = props;
	let valueToString = '';
	if (value) {
		valueToString = value.toString();
	} else if (typeof children === 'string') {
		valueToString = children;
	}
	return (
		<RFDDOptionStyle.Wrapper
			key={`option${index}`}
			data-testid={`option${index}`}
			onClick={(): void => onChange && onChange(valueToString)}
		>
			{children}
		</RFDDOptionStyle.Wrapper>
	);
};
RFDDOption.displayName = 'RFDDOption';
export default RFDDOption;
