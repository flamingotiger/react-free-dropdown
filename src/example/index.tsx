import React from "react";
import Fdd, { FDDOption } from "../Fdd";
import styled from 'styled-components';

const ExampleStyle = styled.div`
    display: flex;
    margin-bottom: 20px;
    width: 250px;
    justify-content: space-between;
    align-items: center;
`

const Example: React.FC = () => {
  const [value, setValue] = React.useState<string>("");
  return (
    <>
    <h1>Free Drop Down</h1>
    <ExampleStyle>
      <Fdd
        onChange={(value: string) => setValue(value)}
        value={value}
        style={{ width: "120px", height: "30px"}}
        mode="dark"
      >
        <FDDOption value="🍎Apple">🍎Apple</FDDOption>
        <FDDOption value="🥕Carrot">🥕Carrot</FDDOption>
        <FDDOption value="🍌Banana">🍌Banana</FDDOption>
        <FDDOption value="🍇Grape">🍇Grape</FDDOption>
        <FDDOption value="🍊Orange">🍊Orange</FDDOption>
      </Fdd>
      <Fdd
        onChange={(value: string) => setValue(value)}
        value={value}
        style={{ width: "120px", height: "30px" }}
        mode="white"
      >
        <FDDOption value="🍎Apple">🍎Apple</FDDOption>
        <FDDOption value="🥕Carrot">🥕Carrot</FDDOption>
        <FDDOption value="🍌Banana">🍌Banana</FDDOption>
        <FDDOption value="🍇Grape">🍇Grape</FDDOption>
        <FDDOption value="🍊Orange">🍊Orange</FDDOption>
      </Fdd>
      </ExampleStyle>
      <div>
        <b>value: {value}</b>
      </div>
    </>
  );
};

export default Example;
