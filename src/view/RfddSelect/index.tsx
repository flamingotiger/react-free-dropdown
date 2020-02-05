import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Mode, RFDDSelectType } from 'types';
import color from 'common/styles';

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
		background: ${({ mode }: RFDDSelectStyle): string => (mode === 'light' ? color.white : color.dark)};
		color: ${({ mode }: RFDDSelectStyle): string =>
			mode === 'light' ? color.opacityDarkGray : color.opacityLightGray};
		transition: color 0.3s;
		&:hover {
			color: ${({ mode }: RFDDSelectStyle): string => (mode === 'light' ? color.black : color.white)};
			svg {
				path {
					stroke: ${({ mode }: RFDDSelectStyle): string => (mode === 'light' ? color.black : color.white)};
				}
			}
		}
		font-size: 12px;
		line-height: 12px;
		border: 1px solid ${({ mode }: RFDDSelectStyle): string => (mode === 'light' ? color.gray : color.dark)};
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
				mode === 'light' ? color.opacityDarkGray : color.opacityLightGray};
		}
	`
};

export const RFDDSelect: React.FC<RFDDSelectType> = props => {
	const { className, style, setIsFocus, isValue, mode, value, isFocus } = props;
	const selectEl = React.useRef<HTMLDivElement>(null);
	useEffect(() => {
		if (selectEl && selectEl.current) {
			const { width } = selectEl.current.getBoundingClientRect();
			setSelectWidth(width);
		}
	}, [selectEl]);
	return (
		<RFDDSelectStyle.Wrapper
			className={className}
			style={style}
			onClick={(): void => setIsFocus()}
			isValue={isValue}
			mode={mode}
			ref={selectEl}
			id="select"
			data-testid="select"
		>
			<span data-testid="select-text">{value}</span>
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
	);
};
