import React, { CSSProperties, useEffect } from 'react';
import styled from 'styled-components';

interface FDDType {
    className?: string;
    style?: CSSProperties;
}

interface FDDPropsType extends FDDType {
    value?: string;
    children?: React.ReactElement<FDDOptionType, 'FDDOption'>[];
    onChange?: (value: string) => void;
}

interface FDDOptionType extends FDDType {
    value?: string | number;
    onChange?: (value: string) => void;
    children: React.ReactNode;
}

const FDDOptionStyle = {
    Wrapper: styled.div`
        width: 100%;
        cursor: pointer;
        list-style: none;
        padding: 4px 4px 4px 8px;
        box-sizing: border-box;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        font-size: 14px;
        line-height: 14px;
        color: white;
        &:hover{
          background-color: #00bfff; 
        }
    `
}
const FDDSelectStyle = {
    Wrapper: styled.div`
        display: flex;
        align-items: center;
        cursor: pointer;
        padding: 4px;
        box-sizing: border-box;
        background: white;
        border-radius: 4px;
        font-size: 14px;
        line-height: 14px;
        border: 1px solid rgba(255,255,255,0);
        width: 100%;
        
        &:hover{
          border: 1px solid #00bfff;
        }
    `
}
const FDDStyle = {
    Wrapper: styled.div`
        display: inline-block;
        position: relative;
        box-sizing: border-box;
    `,
    Ul: styled.ul`
        display: block;
        list-style: none;
        position: absolute;
        left: 0;
        top: 100%;
        margin: 0;
        padding: 0;
        width: ${(props: { width: number }) => `${props.width}px`};
        box-sizing: border-box;        
        border-radius: 4px;
        background: rgba(100, 100, 100, 0.8);
        overflow: hidden;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    `
}

export const FDDOption: React.FC<FDDOptionType> = props => {
    const {value, children, onChange} = props;
    let valueToString = '';
    if (value) {
        valueToString = value.toString()
    } else {
        if (typeof children === "string") {
            valueToString = children;
        }
    }
    return <FDDOptionStyle.Wrapper
        onClick={() => onChange && onChange(valueToString)}>{children}</FDDOptionStyle.Wrapper>
}
FDDOption.displayName = 'FDDOption';

const Fdd: React.FC<FDDPropsType> = props => {
    const {children, className, style, onChange, value} = props;
    const [noOnChangeValue, setNoOnChangeValue] = React.useState<string>('');
    const [isFocus, setIsFocus] = React.useState<boolean>(false);
    const [selectWidth, setSelectWidth] = React.useState<number>(0);
    const selectEl = React.useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (selectEl && selectEl.current) {
            const {width} = selectEl.current.getBoundingClientRect();
            setSelectWidth(width);
        }
    }, [selectEl]);
    const existOrNoOnChange = (value: string) => {
        if (onChange) {
            onChange(value);
        } else {
            setNoOnChangeValue(value);
        }
        setIsFocus(false);
    }
    return (<FDDStyle.Wrapper tabIndex={1} onBlur={() => setIsFocus(false)}>
        <FDDSelectStyle.Wrapper className={className} style={style}
                                onClick={() => setIsFocus(prevState => !prevState)}
                                ref={selectEl}>{value ? value : noOnChangeValue}</FDDSelectStyle.Wrapper>
        {(isFocus && children) &&
        <FDDStyle.Ul width={selectWidth}>
          <FDDOption value='' onChange={existOrNoOnChange}>Select...</FDDOption>
            {React.Children.map(children, (child: React.ReactElement<FDDOptionType> & { type: { displayName?: string } }) => {
                // Render when FDDOption is enabled only
                if (child.type.displayName === 'FDDOption') {
                    return React.cloneElement(child, {onChange: existOrNoOnChange});
                } else {
                    return null;
                }
            })}
        </FDDStyle.Ul>}
    </FDDStyle.Wrapper>)
}

export default Fdd;



