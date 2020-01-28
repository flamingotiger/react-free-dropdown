import React, { CSSProperties, useEffect } from 'react';
import styled from 'styled-components';

interface FDDType {
    className?: string;
    style?: CSSProperties;
}

interface FDDPropsType extends FDDType {
    children?: React.ReactNode;
}

interface FDDOptionType extends FDDType {

}

interface FDDSelectType extends FDDType {

}

const FDDOptionStyle = {
    Wrapper: styled.div`
        width: 100%;
        border: 2px solid green;
        cursor: pointer;
        list-style: none;
        padding: 4px;
        box-sizing: border-box;
    `
}
const FDDSelectStyle = {
    Wrapper: styled.div`
        border: 2px solid blue;
        display: flex;
        align-items: center;
        cursor: pointer;
        padding: 4px;
    `
}
const FDDStyle = {
    Wrapper: styled.div`
        display: inline-block;
        border: 10px solid red;
        position: relative;
    `,
    Ul: styled.ul`
        display: block;
        list-style: none;
        position: absolute;
        border: 10px solid yellow;
        left: 0;
        top: 100%;
        margin: 0;
        padding: 0;
        width: ${(props: { width: number }) => `${props.width}px`}
    `
}

export const FDDOption: React.FC<FDDOptionType> = props => {
    return <FDDOptionStyle.Wrapper>Option</FDDOptionStyle.Wrapper>
}

const Fdd: React.FC<FDDPropsType> = props => {
    const {children, className, style} = props;
    const [selectWidth, setSelectWidth] = React.useState<number>(0);
    const selectEl = React.useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (selectEl && selectEl.current) {
            const {width} = selectEl.current.getBoundingClientRect();
            setSelectWidth(width);
        }
    }, [selectEl]);
    return (<FDDStyle.Wrapper>
        <FDDSelectStyle.Wrapper className={className} style={style} ref={selectEl}>셀렉트</FDDSelectStyle.Wrapper>
        <FDDStyle.Ul width={selectWidth}>
            {children}
        </FDDStyle.Ul>
    </FDDStyle.Wrapper>)
}

export default Fdd;



