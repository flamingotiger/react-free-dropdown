import React from "react";
import Rfdd, { RFDDOption } from "../Rfdd";
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
      <Rfdd
        onChange={(value: string) => setValue(value)}
        value={value}
        style={{ width: "120px", height: "30px"}}
        mode="dark"
      >
        <RFDDOption value="🍎Apple">🍎Apple</RFDDOption>
        <RFDDOption value="🥕Carrot">🥕Carrot</RFDDOption>
        <RFDDOption value="🍌Banana">🍌Banana</RFDDOption>
        <RFDDOption value="🍇Grape">🍇Grape</RFDDOption>
        <RFDDOption value="🍊Orange">🍊Orange</RFDDOption>
      </Rfdd>
      <Rfdd
        onChange={(value: string) => setValue(value)}
        value={value}
        style={{ width: "120px", height: "30px" }}
        mode="white"
      >
        <RFDDOption value="🍎Apple">🍎Apple</RFDDOption>
        <RFDDOption value="🥕Carrot">🥕Carrot</RFDDOption>
        <RFDDOption value="🍌Banana">🍌Banana</RFDDOption>
        <RFDDOption value="🍇Grape">🍇Grape</RFDDOption>
        <RFDDOption value="🍊Orange">🍊Orange</RFDDOption>
      </Rfdd>
      </ExampleStyle>
      <div>
        <b>value: {value}</b>
      </div>
    </>
  );
};

export default Example;
