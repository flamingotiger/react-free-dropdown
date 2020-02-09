import * as React from 'react';
import styled from 'styled-components';
import { Mode, RfddSelectType } from '../types';
import color from '../common/styles';
import { isLightMode } from '../common/utils';
import { useStatusChangeState, useStatusChangeDispatch, StatusChangeActionType } from '../state/status-change';
import { useGetLayoutDispatch, GetLayoutActionType } from '../state/get-layout';

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
		min-width: 120px;
		min-height: 30px;
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
	const { isFocus } = useStatusChangeState();
	const statusChangeDispatch = useStatusChangeDispatch();
	const getLayoutDispatch = useGetLayoutDispatch();

	React.useEffect(() => {
		if (selectEl && selectEl.current) {
			const { width } = selectEl.current.getBoundingClientRect();
			getLayoutDispatch({ type: GetLayoutActionType.GET_SELECT_WIDTH, selectWidth: width });
		}
	}, [getLayoutDispatch, selectEl]);

	return (
		<RfddSelectStyle.Wrapper
			className={className}
			style={style}
			onClick={() => statusChangeDispatch({ type: StatusChangeActionType.IS_FOCUS, isFocus: !isFocus })}
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
