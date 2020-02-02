import React from 'react';
import Fdd, { FDDOption } from "../Fdd";

const Example: React.FC = () => {
    const [value, setValue] = React.useState<string>('');
    return (
        <>
            <Fdd onChange={(value: string) => setValue(value)} value={value} style={{width: '120px', height: '30px'}}>
                <FDDOption value="React">React</FDDOption>
                <FDDOption value="React Native">React Native</FDDOption>
                <FDDOption value="Redux">Redux</FDDOption>
                <FDDOption value="Redux Saga">Redux Saga</FDDOption>
                <FDDOption value="Redux Thunk">Redux Thunk</FDDOption>
                <div>?test</div>
            </Fdd>
        </>)
}

export default Example;
