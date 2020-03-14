import * as React from 'react';
import styled, { css, CSSProp } from 'styled-components';
import { RfddSelectStyleType, RFDDIconStyleType, RfddSelectProps } from '../types';
import color from '../common/styles';
import { isLightMode } from '../common/utils';
import { useStatusChangeState, useStatusChangeDispatch, StatusChangeActionType } from '../state/status-change';
import DefaultIcon from '../assets/default_arrow.svg';

const RfddSelectStyle = {
	Wrapper: styled.div`
		display: flex;
		align-items: center;
		cursor: pointer;
		padding: 4px 4px 4px 8px;
		box-sizing: border-box;
		${({ mode }: RfddSelectStyleType): CSSProp =>
			isLightMode(mode)
				? css`
						border: 1px solid ${color.gray};
						background: ${color.white};
						color: ${color.opacityDarkGray};
				  `
				: css`
						border: 1px solid ${color.dark};
						background: ${color.dark};
						color: ${color.opacityLightGray};
				  `}
		transition: color 0.3s;
		&:hover {
			color: ${({ mode }: RfddSelectStyleType): string => (isLightMode(mode) ? color.black : color.white)};
		}
		font-size: 12px;
		width: 100%;
		min-height: 30px;
		height: 100%;
		position: relative;
		span {
			width: 80%;
			display: flex;
			height: 100%;
			overflow-x: hidden;
			overflow-y: initial;
			align-items: center;
			text-overflow: ellipsis;
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

export const RfddSelect: React.FC<RfddSelectProps> = props => {
	const { focusStyle, selectClassName, selectStyle, isValue, mode, value, icon, hiddenIcon } = props;
	const { isFocus } = useStatusChangeState();
	const statusChangeDispatch = useStatusChangeDispatch();

	return (
		<RfddSelectStyle.Wrapper
			className={selectClassName || 'rfdd-select'}
			style={isFocus && focusStyle ? { ...selectStyle, ...focusStyle } : selectStyle}
			onClick={() => statusChangeDispatch({ type: StatusChangeActionType.IS_FOCUS, isFocus: !isFocus })}
			isValue={isValue}
			mode={mode}
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
