import * as React from 'react';
import styled, { css } from 'styled-components';
import { RfddOptionStyleType, RfddOptionProps } from '../types';
import color from '../common/styles';
import { classes } from '../common/utils';

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
		width: 100%;
		height: 30px;
		text-align: left;
		display: flex;
		align-items: center;
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
const RfddOption: React.FC<RfddOptionProps> = props => {
	const {
		optionClassName,
		className,
		value,
		children,
		onChange,
		index,
		style,
		hoverStyle,
		optionStyle,
		onClick,
		onSelectChange
	} = props;
	return (
		<RfddOptionStyle.Wrapper
			className={
				className && optionClassName
					? classes(className, optionClassName)
					: className || optionClassName || 'rfdd-option'
			}
			key={`option${index}`}
			data-testid={`option${index}`}
			onClick={(): void => {
				if (onClick) {
					onClick();
				}
				if (onSelectChange) {
					let textToString = '';
					if (children) {
						textToString = String(children);
					} else if (typeof children === 'string') {
						textToString = children;
					}
					onSelectChange(textToString);
				}
				let valueToString = '';
				if (value) {
					valueToString = value.toString();
				} else if (typeof children === 'string') {
					valueToString = children;
				}
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
