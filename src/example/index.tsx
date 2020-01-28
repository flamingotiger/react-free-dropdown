import React from 'react';
import Fdd, {FDDOption} from "../Fdd";

const Example: React.FC = () => {
    return (
        <>
            <Fdd>
                <FDDOption>test1</FDDOption>
                <FDDOption>test2</FDDOption>
                <FDDOption>test3</FDDOption>
                <FDDOption>test4</FDDOption>
            </Fdd>
        </>)
}

export default Example;
