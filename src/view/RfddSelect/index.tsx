import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Mode, RfddSelectType } from 'types';
import { useDispatch, useSelector } from 'react-redux';
import color from '../../common/styles';
import { isLightMode } from '../../common/utils';
import { getSelectWidth } from '../../state/get-layout';
import { RootState } from '../../state/reducers';
import { setIsFocus, StatusChangeActionType } from '../../state/status-change';

interface RfddSelectStyleType {
	mode: Mode;
	isValue: boolean;
}

interface RFDDSvgStyleType {
	mode: Mode;
	isFocus: boolean;
}

const RfddSelectStyle = {
	Wrapper: styled.div`
		display: flex;
		align-items: center;
		cursor: pointer;
		padding: 4px 4px 4px 8px;
		box-sizing: border-box;
		background: ${({ mode }: RfddSelectStyleType): string => (isLightMode(mode) ? color.white : color.dark)};
		color: ${({ mode }: RfddSelectStyleType): string =>
			isLightMode(mode) ? color.opacityDarkGray : color.opacityLightGray};
		transition: color 0.3s;
		svg {
			path {
				stroke: ${({ mode }: RfddSelectStyleType): string =>
					isLightMode(mode) ? color.opacityDarkGray : color.opacityLightGray};
			}
		}
		&:hover {
			color: ${({ mode }: RfddSelectStyleType): string => (isLightMode(mode) ? color.black : color.white)};
			svg {
				path {
					stroke: ${({ mode }: RfddSelectStyleType): string => (isLightMode(mode) ? color.black : color.white)};
				}
			}
		}
		font-size: 12px;
		line-height: 12px;
		border: 1px solid ${({ mode }: RfddSelectStyleType): string => (isLightMode(mode) ? color.gray : color.dark)};
		width: 100%;
		min-width: 40px;
		min-height: 20px;
		position: relative;
	`,
	Svg: styled.svg`
		position: absolute;
		right: 10px;
		top: 50%;
		margin-top: ${({ isFocus }: RFDDSvgStyleType): string => (isFocus ? '-2px' : '-7.5px')};
		transform: ${({ isFocus }: RFDDSvgStyleType): string => (isFocus ? 'rotate(135deg)' : 'rotate(-45deg)')};
	`
};

export const RfddSelect: React.FC<RfddSelectType> = props => {
	const { className, style, isValue, mode, value } = props;
	const selectEl = React.useRef<HTMLDivElement>(null);
	const dispatch = useDispatch();
	const { isFocus } = useSelector((state: RootState) => state.statusChange);

	useEffect(() => {
		if (selectEl && selectEl.current) {
			const { width } = selectEl.current.getBoundingClientRect();
			dispatch(getSelectWidth(width));
		}
	}, [selectEl, dispatch]);
	return (
		<RfddSelectStyle.Wrapper
			className={className}
			style={style}
			onClick={(): { type: StatusChangeActionType.IS_FOCUS; payload: { isFocus: boolean } } =>
				dispatch(setIsFocus(!isFocus))
			}
			isValue={isValue}
			mode={mode}
			ref={selectEl}
			id="select"
			data-testid="select"
		>
			<span data-testid="select-text">{value}</span>
			<RfddSelectStyle.Svg
				width="10px"
				height="10px"
				viewBox="0 0 10 10"
				xmlns="http://www.w3.org/2000/svg"
				mode={mode}
				isFocus={isFocus}
			>
				<path d="M0 0 V 10 H 10" fill="none" />
			</RfddSelectStyle.Svg>
		</RfddSelectStyle.Wrapper>
	);
};
