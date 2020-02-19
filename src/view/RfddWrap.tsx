import * as React from 'react';
import styled, { css, CSSProp } from 'styled-components';
import { RfddStyleType, RfddProps, RfddOptionProps } from '../types';
import color from '../common/styles';
import { classes, isLightMode } from '../common/utils';
import { RfddSelect } from './RfddSelect';
import { StatusChangeActionType, useStatusChangeDispatch, useStatusChangeState } from '../state/status-change';

const RfddStyle = {
	Wrapper: styled.div`
		display: inline-block;
		position: relative;
		box-sizing: border-box;
		font-weight: lighter;
		outline: none;
		min-width: 120px;
		height: 30px;
	`,
	Ul: styled.ul`
		display: block;
		list-style: none;
		position: absolute;
		left: 0;
		top: 100%;
		z-index: 200;
		margin: 0;
		padding: 0;
		${({ mode }: RfddStyleType): CSSProp => {
			if (isLightMode(mode)) {
				return css`
					background-color: ${color.light};
					color: rgb(100, 100, 100);
					&::-webkit-scrollbar {
						width: 10px;
						padding: 0 2px;
						box-sizing: border-box;
					}
					&::-webkit-scrollbar-track {
						padding: 0 2px;
						box-sizing: border-box;
						background-color: rgb(220, 220, 220);
					}
					&::-webkit-scrollbar-thumb {
						background-color: rgb(190, 190, 190);
						width: 8px;
						border-radius: 10px;
						&:hover {
							background-color: rgb(180, 180, 180);
						}
					}
				`;
			}
			return css`
				background-color: ${color.dark};
				color: ${color.white};
				&::-webkit-scrollbar {
					width: 10px;
					padding: 0 2px;
					box-sizing: border-box;
				}
				&::-webkit-scrollbar-track {
					background-color: rgb(60, 60, 60);
				}
				&::-webkit-scrollbar-thumb {
					background-color: rgb(150, 150, 150);
					width: 8px;
					border-radius: 10px;
					&:hover {
						background-color: rgb(180, 180, 180);
					}
				}
			`;
		}};
		width: 100%;
		box-sizing: border-box;
		overflow: hidden;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		transition: max-height 0.2s;
		max-height: ${({ isFocus }: RfddStyleType): string => (isFocus ? '100px' : '0')};
		${({ isFocus }: RfddStyleType): string => (isFocus ? 'overflow-y: auto' : 'overflow: hidden')};
	`
};

const RfddWrap: React.FC<RfddProps> = props => {
	const {
		children,
		selectClassName,
		optionOnClick,
		optionClassName,
		className,
		style,
		focusStyle,
		selectStyle,
		hoverStyle,
		optionStyle,
		onChange,
		value,
		mode = 'light',
		icon,
		hiddenIcon,
		placeholder = ''
	} = props;
	const [selectValue, setSelectValue] = React.useState<string>('');
	const { isFocus } = useStatusChangeState();
	const statusChangeDispatch = useStatusChangeDispatch();
	const handleChange = (optionValue: string): void => {
		if (onChange) {
			onChange(optionValue);
		}
		statusChangeDispatch({ type: StatusChangeActionType.ON_BLUR });
	};
	const handleSelectChange = (optionStr: string): void => {
		setSelectValue(optionStr);
		statusChangeDispatch({ type: StatusChangeActionType.ON_BLUR });
	};
	const isValue = value !== '' || selectValue !== '';
	return (
		<RfddStyle.Wrapper
			tabIndex={0}
			onBlur={() => statusChangeDispatch({ type: StatusChangeActionType.ON_BLUR })}
			data-testid="rfdd"
			className={className ? classes('rfdd', className) : 'rfdd'}
			style={{ ...style }}
		>
			<RfddSelect
				selectClassName={selectClassName}
				focusStyle={focusStyle}
				selectStyle={selectStyle}
				isValue={isValue}
				mode={mode}
				value={selectValue || placeholder}
				icon={icon}
				hiddenIcon={hiddenIcon}
			/>
			{children && (
				<RfddStyle.Ul isFocus={isFocus} mode={mode} id="list" data-testid="list">
					{React.Children.map(
						children,
						(
							child: React.ReactElement<RfddOptionProps> & {
								type: { displayName?: string };
							},
							index: number
						) => {
							// Render when RfddOption is enabled only
							if (child.type.displayName === 'RfddOption') {
								return React.cloneElement(child, {
									onChange: handleChange,
									onSelectChange: handleSelectChange,
									optionClassName,
									optionOnClick,
									index,
									hoverStyle,
									optionStyle
								});
							}
							return null;
						}
					)}
				</RfddStyle.Ul>
			)}
		</RfddStyle.Wrapper>
	);
};

export default RfddWrap;
