import React, { CSSProperties } from 'react';
import styled from 'styled-components';

interface FDDType {
    className?: string;
    style?: CSSProperties;
}

interface FDDPropsType extends FDDType {

}

interface FDDOptionType extends FDDType {

}

interface FDDSelectType extends FDDType {

}

const FDDSelectStyle = {
    Wrapper: styled.div`
    width: 100px;
    height: 20px;
    border: 2px solid blue;
    `
}
const FDDOptionStyle = {
    Wrapper: styled.div`
    width: 100px;
    height: 20px;
    border: 2px solid green;
    `
}
const FDDStyle = {
    Wrapper: styled.div`
    width: 200px;
    height: 100px;
    border: 10px solid red;
`
}

export const FDDOption: React.FC<FDDOptionType> = props => {
    return <FDDOptionStyle.Wrapper>Option</FDDOptionStyle.Wrapper>
}

const FDDSelect: React.FC<FDDSelectType> = props => {
    return <FDDSelectStyle.Wrapper>FDDSelect</FDDSelectStyle.Wrapper>
}

const Fdd: React.FC<FDDPropsType> = props => {
    return (<FDDStyle.Wrapper>
        <FDDSelect/>
    </FDDStyle.Wrapper>)
}

export default Fdd;



