import * as React from 'react';

// Common types
export interface RfddCommon {
	style?: React.CSSProperties;
	hoverStyle?: string;
	optionStyle?: string;
}

// Component types
export type Mode = 'dark' | 'light';

export interface RfddProps extends RfddCommon {
	className?: string;
	value?: string;
	children?: React.ReactElement<RfddOptionProps, 'RfddOption'>[];
	onChange?: (value: string) => void;
	mode?: Mode;
	placeholder?: string;
	listStyle?: string;
	// Receive select props
	icon?: any;
	hiddenIcon?: boolean;
	focusStyle?: React.CSSProperties;
	selectStyle?: React.CSSProperties;
	selectClassName?: string;
	// Receive Option props
	optionClassName?: string;
	optionOnClick?: () => void;
}

export interface RfddOptionProps extends RfddCommon {
	className?: string;
	optionClassName?: string;
	value?: string | number;
	onChange?: (value: string) => void;
	children: React.ReactNode;
	index?: string | number;
	optionOnClick?: () => void;
	onClick?: () => void;
	onSelectChange?: (selectStr: string) => void;
}

export interface RfddSelectProps extends RfddCommon {
	selectClassName?: string;
	isValue: boolean;
	mode: Mode;
	value: number | string;
	icon?: any;
	hiddenIcon?: boolean;
	selectStyle?: React.CSSProperties;
	focusStyle?: React.CSSProperties;
}

// Style types
export interface RfddSelectStyleType {
	mode: Mode;
	isValue: boolean;
}

export interface RFDDIconStyleType {
	isFocus: boolean;
}

export interface RfddStyleType {
	mode: Mode;
	isFocus: boolean;
	listStyle: string;
}

export interface RfddOptionStyleType {
	style?: React.CSSProperties;
	hoverStyle?: string;
	optionStyle?: string;
}
