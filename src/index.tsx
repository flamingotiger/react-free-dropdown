import React from 'react';
import ReactDOM from 'react-dom';
import Rfdd from './view/Rfdd';
import Example from './example';
// Components
export { default as RfddOption } from './view/RfddOption';
export default Rfdd;

ReactDOM.render(
	<>
		<Example />
	</>,
	document.getElementById('root')
);
