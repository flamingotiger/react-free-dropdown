import React, { CSSProperties } from 'react';

export type Mode = 'dark' | 'light';

export interface RFDDType {
	className?: string;
	style?: CSSProperties;
}

export interface RFDDPropsType extends RFDDType {
	value?: string;
	children?: React.ReactElement<RFDDOptionType, 'RFDDOption'>[];
	onChange?: (value: string) => void;
	mode?: Mode;
}

export interface RFDDOptionType extends RFDDType {
	value?: string | number;
	onChange?: (value: string) => void;
	children: React.ReactNode;
	index?: number;
}

export interface RFDDSelectType extends RFDDType {
	setIsFocus: () => void;
	isValue: boolean;
	mode: Mode;
	value: number | string;
	isFocus: boolean;
}
