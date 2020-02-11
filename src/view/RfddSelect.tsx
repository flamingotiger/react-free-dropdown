import * as React from 'react';
import styled from 'styled-components';
import { RfddSelectType, RfddSelectStyleType, RFDDIconStyleType } from '../types';
import color from '../common/styles';
import { isLightMode } from '../common/utils';
import { useStatusChangeState, useStatusChangeDispatch, StatusChangeActionType } from '../state/status-change';
import { useGetLayoutDispatch, GetLayoutActionType } from '../state/get-layout';
import DefaultIcon from '../static/default_arrow.svg';

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
		&:hover {
			color: ${({ mode }: RfddSelectStyleType): string => (isLightMode(mode) ? color.black : color.white)};
		}
		font-size: 12px;
		line-height: 12px;
		border: 1px solid ${({ mode }: RfddSelectStyleType): string => (isLightMode(mode) ? color.gray : color.dark)};
		width: 120px;
		height: 30px;
		position: relative;
		span {
			width: 80%;
			text-overflow: ellipsis;
			overflow: hidden;
			white-space: nowrap;
		}
	`,
	Icon: styled.div`
		position: absolute;
		right: 10px;
		top: 50%;
		margin-top: -6px;
		transform: ${({ isFocus }: RFDDIconStyleType): string => (isFocus ? 'rotate(180deg)' : 'rotate(0deg)')};
		img {
			display: block;
			width: 12px;
			height: 12px;
		}
	`
};

export const RfddSelect: React.FC<RfddSelectType> = props => {
	const { style, isValue, mode, value, icon, hiddenIcon } = props;
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
			style={style}
			onClick={() => statusChangeDispatch({ type: StatusChangeActionType.IS_FOCUS, isFocus: !isFocus })}
			isValue={isValue}
			mode={mode}
			ref={selectEl}
			id="select"
			data-testid="select"
		>
			<span data-testid="select-text">{value}</span>
			{!hiddenIcon && (
				<RfddSelectStyle.Icon isFocus={isFocus}>
					<img src={icon || DefaultIcon} alt="default arrow icon" />
				</RfddSelectStyle.Icon>
			)}
		</RfddSelectStyle.Wrapper>
	);
};
