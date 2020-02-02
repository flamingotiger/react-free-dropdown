import React from 'react';
import Fdd, { FDDOption } from "../Fdd";

const Example: React.FC = () => {
    const [value, setValue] = React.useState<string>('');
    return (
        <>
            <Fdd onChange={(value: string) => setValue(value)} value={value}>
                <FDDOption>test1</FDDOption>
                <FDDOption value={2}>test2</FDDOption>
                <FDDOption value={3}>test3</FDDOption>
                <FDDOption value={4}>test4</FDDOption>
                <div>?test</div>
            </Fdd>
        </>)
}

export default Example;
