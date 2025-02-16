<div align="center">
  <img src="./public/RFDD_logo.png" alt="react free fropdown logo" />
</div>
<h1 align="center">react-free-dropdown <small><sup>(RFDD)</sup></small></h1>
<div align="center">

**Easy custom** dropdown list with [`React`](https://facebook.github.io/react/)

[![Actions Status](https://github.com/flamingotiger/react-free-dropdown/workflows/react-free-dropdown-ci/badge.svg)](https://github.com/flamingotiger/react-free-dropdown/actions)
[![npm](https://img.shields.io/npm/v/react-free-dropdown.svg)](https://www.npmjs.com/package/react-free-dropdown)
[![install size](https://packagephobia.now.sh/badge?p=react-free-dropdown)](https://packagephobia.now.sh/result?p=react-free-dropdown)
[![npm downloads](https://img.shields.io/npm/dm/react-free-dropdown.svg?style=flat-square)](http://npm-stat.com/charts.html?package=react-free-dropdown)

</div>

## Get Started 📦
`react-free-dropdown` install the package.

```shell
npm install react-free-dropdown
```

## Usage 📃

```javascript jsx
import React from 'react';
import { Rfdd, RfddOption } from 'react-free-dropdown';

const App = () => {
  const [value, setValue] = React.useState('');
  return (<>
      <Rfdd onChange={optionValue => setValue(optionValue)}>
        <RfddOption value="Apple">Apple</RfddOption>
        <RfddOption value="Grape">Grape</RfddOption>    
      </Rfdd>
      <p>{value}</p>
    </>);
}

export default App;
```

## Rfdd Property ⛷

| Property  | Type | Descriptions | Example |
| ------------- | ------------- | ------------- | ------------- |
| selectClassName | `string` | select className | `selectClassName="select-classname"` |
| selectStyle  | `React.CSSProperties`  | select component style | `selectStyle={{border: '1px solid red'}}` | 
| optionClassName | `string` | option className | `optionClassName="option-classname"` |
| optionStyle | `string` | all option custom style | `optionStyle='border: 1px solid red;'` |
| style  | `React.CSSProperties`  | dropdown wrapper style | `style={{border: '1px solid red'}}` |
| className | `string` | dropdown wrapper className | `className="wrapper-classname"` |
| focusStyle  | `React.CSSProperties`  | if focus use style | `focusStyle={{border: '1px solid red'}}` | 
| value | `string` | selected value | `value={value}` |
| children | `React.ReactElement<RfddOptionType, 'RfddOption'>[]` | only use RfddOption component | `<RfddOption>option</RfddOption>`|
| onChange | `(value: string) => void` | change value function | `onChange={(optionValue) => setValue(optionValue)}`|
| mode | `light` or `dark` | light or dark mode | `mode='dark'`|
| hoverStyle | `string` | custom hover style | `hoverStyle='border: 1px solid red;'` |
| icon | `any` | usage import image `import image from './example.png'` | `icon={image}` |
| hiddenIcon | `boolean` | hidden icon | `hiddenIcon={true}` |
| placeholder | `string` | setting placeholder | `placeholder='area'` |
| listStyle | `string` | ul list style | `listStyle='max-height:200px'` |
| optionOnClick | `() => void` | all option onClick | `optionOnClick={() => console.log('onClick')}`|

## RfddOption Property 🏂

| Property  | Type | Descriptions | Example |
| ------------- | ------------- | ------------- | ------------- |
| value | `string` | option value | `value='option-value'`|
| style  | `React.CSSProperties`  | must be entered as camelcase | `style={{ border: '1px solid red' }}`|
| className  | `string`  | must be entered as camelcase | `className="class-name"`|
| children | `React.ReactNode` | option children | `option text or <div>option Element</div>`|
| hoverStyle | `string` | each option custom hover style | `hoverStyle='border: 1px solid red;'` |
| onClick | `() => void` | onChange before active function | `onClick={() => console.log('onClick')}` |

## Preview 🎆

![react-free-dropdown preview](./public/react-free-dropdown-example.gif)

🔎[Play the example](https://react-free-dropdown.netlify.com/?path=/story/drop-down-basic--light-mode)
