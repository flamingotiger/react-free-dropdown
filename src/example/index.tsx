import React from 'react';
import Fdd, { FDDOption } from "../Fdd";

const Example: React.FC = () => {
    return (
        <>
            <Fdd>
                <FDDOption value={1}>test1</FDDOption>
                <FDDOption value={2}>test2</FDDOption>
                <FDDOption value={3}>test3</FDDOption>
                <FDDOption value={4}>test4</FDDOption>
            </Fdd>
        </>)
}

export default Example;
