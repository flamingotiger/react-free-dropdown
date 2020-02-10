import * as React from 'react';

// Common types
export interface RfddCommonStyleType {
	style?: React.CSSProperties;
	hoverStyle?: string;
	optionStyle?: string;
}

// Component types
export type Mode = 'dark' | 'light';

export type RfddType = RfddCommonStyleType;

export interface RfddPropsType extends RfddType {
	value?: string;
	children?: React.ReactElement<RfddOptionType, 'RfddOption'>[];
	onChange?: (value: string) => void;
	mode?: Mode;
}

export interface RfddOptionType extends RfddType {
	value?: string | number;
	onChange?: (value: string) => void;
	children: React.ReactNode;
	index?: string | number;
	onClick?: () => void;
}

export interface RfddSelectType extends RfddType {
	isValue: boolean;
	mode: Mode;
	value: number | string;
}

// Style types
export interface RfddSelectStyleType {
	mode: Mode;
	isValue: boolean;
}

export interface RFDDSvgStyleType {
	mode: Mode;
	isFocus: boolean;
}

export interface RfddStyleProps {
	mode: Mode;
	width: number;
	isFocus: boolean;
}

export type RfddOptionStyleType = RfddCommonStyleType;
