import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
	}
	body{
		background-color: #ffffff;
		font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
	}
	a {
		color: inherit;
		text-decoration: none;
    }
	ol, ul, li {
		list-style: none;
	}
`;

export default GlobalStyle;