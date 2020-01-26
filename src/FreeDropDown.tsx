import React from 'react';
import styled from 'styled-components';

const FreeDropDownWrapper = styled.div`
    width: 200px;
    height: 100px;
    border: 1px solid red;
`

interface FreeDropDownProps {

}

const FreeDropDown:React.FC<FreeDropDownProps> = props => {
    return (<FreeDropDownWrapper>
        App
    </FreeDropDownWrapper>)
}

export default FreeDropDown;



