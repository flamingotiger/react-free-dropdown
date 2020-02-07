import * as React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Mode, RfddPropsType, RfddOptionType } from '../types';
import color from '../common/styles';
import { RootState } from '../state/reducers';
import { isLightMode } from '../common/utils';
import { RfddSelect } from './RfddSelect';
import { setOnBlur } from '../state/status-change';

interface RfddStyleProps {
	mode: Mode;
	width: number;
	isFocus: boolean;
}

const RfddStyle = {
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
		${({ mode }: RfddStyleProps): string => {
			if (isLightMode(mode)) {
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
		width: ${({ width }: RfddStyleProps): string => `${width}px`};
		box-sizing: border-box;
		overflow: hidden;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		z-index: 100;
		transition: max-height 0.2s;
		max-height: ${({ isFocus }: RfddStyleProps): string => (isFocus ? '100px' : '0')};
		${({ isFocus }: RfddStyleProps): string => (isFocus ? 'overflow-y: auto' : 'overflow: hidden')};
	`
};

const RfddWrap: React.FC<RfddPropsType> = props => {
	const { children, className, style, onChange, value, mode = 'light' } = props;
	const dispatch = useDispatch();
	const [noOnChangeValue, setNoOnChangeValue] = React.useState<string>('');
	const [{ selectWidth }, { isFocus }] = useSelector((state: RootState) => [state.getLayout, state.statusChange]);

	const existOrNoOnChange = (optionValue: string): void => {
		if (onChange) {
			onChange(optionValue);
		} else {
			setNoOnChangeValue(optionValue);
		}
		dispatch(setOnBlur());
	};

	const isValue = value !== '' || noOnChangeValue !== '';
	return (
		<RfddStyle.Wrapper tabIndex={0} onBlur={() => dispatch(setOnBlur())} data-testid="rfdd" className="rfdd">
			<RfddSelect className={className} style={style} isValue={isValue} mode={mode} value={value || noOnChangeValue} />
			{children && children.length > 0 && (
				<RfddStyle.Ul width={selectWidth} isFocus={isFocus} mode={mode} id="list" data-testid="list">
					{React.Children.map(
						children,
						(
							child: React.ReactElement<RfddOptionType> & {
								type: { displayName?: string };
							},
							index: number
						) => {
							// Render when RfddOption is enabled only
							if (child.type.displayName === 'RfddOption') {
								return React.cloneElement(child, {
									onChange: existOrNoOnChange,
									index
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
