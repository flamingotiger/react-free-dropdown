<div align="center">
  <img src="./public/RFDD_logo.png" alt="react free fropdown logo" />
</div>
<h1 align="center">react-free-dropdown <small><sup>(RFDD)</sup></small></h1>
<div align="center">

**Easy custom** dropdown list with [`React`](https://facebook.github.io/react/)

</div>

## Usage

```typescript jsx
import React from 'react';
import Rfdd, { RfddOption } from 'Rfdd';

const App: React.FC = () => {
  return (<Rfdd hoverStyle="border: 1px solid red">
    <RfddOption value="Apple">Apple</RfddOption>
    <RfddOption value="Grape">Grape</RfddOption>    
  </Rfdd>);
}

export default App;
```

## Rfdd Property

| Property  | Type | Descriptions |
| ------------- | ------------- | ------------- |
| style  | `React.CSSProperties`  | style | 
| hoverStyle | `string` | custom hover style |
| value | `string` | select value |
| children | `React.ReactElement<RfddOptionType, 'RfddOption'>[]` | only use RfddOption component |
| onChange | `(value: string) => void` | change value function |
| mode | `light` or `dark` | light or dark mode |

## RfddOption Property

| Property  | Type | Descriptions |
| ------------- | ------------- | ------------- |
| hoverStyle | `string` | each option custom hover style |
| value | `string` | option value |
| onChange | `(value: string) => void` | change value function |
| children | `React.ReactNode` | option children |
| index | `number` or `string` | option index |
