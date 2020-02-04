import React, { CSSProperties, useEffect } from 'react';
import styled from 'styled-components';
import color from './common/styles';

type Mode = 'dark' | 'white';

interface RFDDType {
	className?: string;
	style?: CSSProperties;
}

export interface RFDDPropsType extends RFDDType {
	value?: string;
	children?: React.ReactElement<RFDDOptionType, 'RFDDOption'>[];
	onChange?: (value: string) => void;
	mode?: Mode;
}

interface RFDDOptionType extends RFDDType {
	value?: string | number;
	onChange?: (value: string) => void;
	children: React.ReactNode;
	index?: number;
}

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

interface RFDDSelectStyle {
	mode: Mode;
	isValue: boolean;
}

const RFDDSelectStyle = {
	Wrapper: styled.div`
		display: flex;
		align-items: center;
		cursor: pointer;
		padding: 4px 4px 4px 8px;
		box-sizing: border-box;
		background: ${({ mode }: RFDDSelectStyle): string => (mode === 'white' ? color.white : color.dark)};
		color: ${({ mode }: RFDDSelectStyle): string =>
			mode === 'white' ? color.opacityDarkGray : color.opacityLightGray};
		transition: color 0.3s;
		&:hover {
			color: ${({ mode }: RFDDSelectStyle): string => (mode === 'white' ? color.black : color.white)};
			svg {
				path {
					stroke: ${({ mode }: RFDDSelectStyle): string => (mode === 'white' ? color.black : color.white)};
				}
			}
		}
		font-size: 12px;
		line-height: 12px;
		border: 1px solid ${({ mode }: RFDDSelectStyle): string => (mode === 'white' ? color.gray : color.dark)};
		width: 100%;
		min-width: 40px;
		min-height: 20px;
		position: relative;
	`,
	Svg: styled.svg`
		position: absolute;
		right: 10px;
		top: 50%;
		margin-top: ${({ isFocus }: { isFocus: boolean; mode: Mode }): string => (isFocus ? '-2px' : '-7.5px')};
		transform: ${({ isFocus }: { isFocus: boolean; mode: Mode }): string =>
			isFocus ? 'rotate(135deg)' : 'rotate(-45deg)'};
		path {
			stroke: ${({ mode }: { isFocus: boolean; mode: Mode }): string =>
				mode === 'white' ? color.opacityDarkGray : color.opacityLightGray};
		}
	`
};

interface RFDDStyleProps {
	mode: Mode;
	width: number;
	isFocus: boolean;
}

const RFDDStyle = {
	Wrapper: styled.div`
		display: inline-block;
		position: relative;
		box-sizing: border-box;
		font-weight: lighter;
		outline: none;
	`,
	Ul: styled.ul`
		display: block;
		list-style: none;
		position: absolute;
		left: 0;
		top: 100%;
		margin: 0;
		padding: 0;
		${({ mode }: RFDDStyleProps): string => {
			if (mode === 'white') {
				return `background-color: ${color.light};
                color: rgb(100,100,100);
                &::-webkit-scrollbar{
                  width: 10px;
                  padding: 0 2px;
                  box-sizing: border-box;
                }
                &::-webkit-scrollbar-track {
                  padding: 0 2px;
                  box-sizing: border-box;
                  background-color: rgb(220,220,220);
                }
                &::-webkit-scrollbar-thumb {
                  background-color: rgb(190,190,190);
                  width: 8px;
                  border-radius: 10px;
                  &:hover{
                    background-color: rgb(180,180,180);
                  }
                }`;
			}
			return `background-color: ${color.dark};
                color: ${color.white};
                &::-webkit-scrollbar{
                  width: 10px;
                  padding: 0 2px;
                  box-sizing: border-box;
                }
                &::-webkit-scrollbar-track {
                  background-color: rgb(60,60,60);
                }
                &::-webkit-scrollbar-thumb {
                  background-color: rgb(150,150,150);
                  width: 8px;
                  border-radius: 10px;
                  &:hover{
                    background-color: rgb(180,180,180);
                  }
                }`;
		}};
		width: ${({ width }: RFDDStyleProps): string => `${width}px`};
		box-sizing: border-box;
		overflow: hidden;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		z-index: 100;
		transition: max-height 0.2s;
		max-height: ${({ isFocus }: RFDDStyleProps): string => (isFocus ? '100px' : '0')};
		${({ isFocus }: RFDDStyleProps): string => (isFocus ? 'overflow-y: auto' : 'overflow: hidden')};
	`
};

export const RFDDOption: React.FC<RFDDOptionType> = props => {
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

const Rfdd: React.FC<RFDDPropsType> = props => {
	const { children, className, style, onChange, value, mode = 'white' } = props;
	const [noOnChangeValue, setNoOnChangeValue] = React.useState<string>('');
	const [isFocus, setIsFocus] = React.useState<boolean>(false);
	const [selectWidth, setSelectWidth] = React.useState<number>(0);
	const selectEl = React.useRef<HTMLDivElement>(null);
	useEffect(() => {
		if (selectEl && selectEl.current) {
			const { width } = selectEl.current.getBoundingClientRect();
			setSelectWidth(width);
		}
	}, [selectEl]);
	const existOrNoOnChange = (optionValue: string): void => {
		if (onChange) {
			onChange(optionValue);
		} else {
			setNoOnChangeValue(optionValue);
		}
		setIsFocus(false);
	};
	const isValue = value !== '' || noOnChangeValue !== '';
	return (
		<RFDDStyle.Wrapper tabIndex={0} onBlur={(): void => setIsFocus(false)} data-testid="rfdd">
			<RFDDSelectStyle.Wrapper
				className={className}
				style={style}
				onClick={(): void => setIsFocus(prevState => !prevState)}
				isValue={isValue}
				mode={mode}
				ref={selectEl}
				id="select"
				data-testid="select"
			>
				<span data-testid="select-text">{value || noOnChangeValue}</span>
				<RFDDSelectStyle.Svg
					width="10px"
					height="10px"
					viewBox="0 0 10 10"
					xmlns="http://www.w3.org/2000/svg"
					mode={mode}
					isFocus={isFocus}
				>
					<path d="M0 0 V 10 H 10" fill="none" />
				</RFDDSelectStyle.Svg>
			</RFDDSelectStyle.Wrapper>
			{children && (
				<RFDDStyle.Ul width={selectWidth} isFocus={isFocus} mode={mode} id="list" data-testid="list">
					{React.Children.map(
						children,
						(
							child: React.ReactElement<RFDDOptionType> & {
								type: { displayName?: string };
							},
							index: number
						) => {
							// Render when RFDDOption is enabled only
							if (child.type.displayName === 'RFDDOption') {
								return React.cloneElement(child, {
									onChange: existOrNoOnChange,
									index
								});
							}
							return null;
						}
					)}
				</RFDDStyle.Ul>
			)}
		</RFDDStyle.Wrapper>
	);
};

export default Rfdd;
