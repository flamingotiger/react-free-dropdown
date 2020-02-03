import React from 'react';
import ReactDOM from 'react-dom';
import Example from './example';
import GlobalStyle from '../src/common/global-styles';

ReactDOM.render(
	<>
		<GlobalStyle />
		<Example />
	</>,
	document.getElementById('root')
);
