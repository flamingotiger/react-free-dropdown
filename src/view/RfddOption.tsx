import * as React from 'react';
import styled, { css } from 'styled-components';
import { RfddOptionType, RfddOptionStyleType } from '../types';
import color from '../common/styles';

const RfddOptionStyle = {
	Wrapper: styled.div`
		cursor: pointer;
		list-style: none;
		padding: 8px;
		box-sizing: border-box;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
		font-size: 12px;
		line-height: 12px;
		width: 120px;
		height: 30px;
		text-align: left;
		&:hover {
			background-color: ${color.keyColor};
			color: #ffffff;
			${({ hoverStyle }: RfddOptionStyleType) => css`
				${hoverStyle}
			`}
		}
		${({ optionStyle }: RfddOptionStyleType) => css`
			${optionStyle}
		`}
	`
};
const RfddOption: React.FC<RfddOptionType> = props => {
	const { value, children, onChange, index, style, hoverStyle, optionStyle, onClick } = props;
	let valueToString = '';
	if (value) {
		valueToString = value.toString();
	} else if (typeof children === 'string') {
		valueToString = children;
	}
	return (
		<RfddOptionStyle.Wrapper
			key={`option${index}`}
			data-testid={`option${index}`}
			onClick={(): void => {
				onClick && onClick();
				return onChange && onChange(valueToString);
			}}
			style={style}
			hoverStyle={hoverStyle}
			optionStyle={optionStyle}
		>
			{children}
		</RfddOptionStyle.Wrapper>
	);
};
RfddOption.displayName = 'RfddOption';
export default RfddOption;
