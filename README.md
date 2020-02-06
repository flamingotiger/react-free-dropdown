<div align="center">
  <img src="./public/RFDD_logo.png" alt="react free fropdown logo" />
</div>
<h1 align="center">react-free-dropdown <small><sup>(RFDD)</sup></small></h1>
<div align="center">

**Easy custom** dropdown list with [`React`](https://facebook.github.io/react/)

</div>

## Getting Started

```typescript jsx
import React from 'react';
import Rfdd, { RfddOption } from 'Rfdd';

const App: React.FC = () => {
  return (<Rfdd>
    <RfddOption value="Apple">Apple</RfddOption>
    <RfddOption value="Grape">Grape</RfddOption>    
  </Rfdd>);
}

export default App;
```
