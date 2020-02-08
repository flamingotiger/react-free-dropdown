import * as React from 'react';

export type Mode = 'dark' | 'light';

export interface RfddType {
	className?: string;
	style?: React.CSSProperties;
}

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
}

export interface RfddSelectType extends RfddType {
	isValue: boolean;
	mode: Mode;
	value: number | string;
}
