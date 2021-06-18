import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

:root {
	--colorOne: #1D1E18;
	--colorTwo: #EEA904;
	--colorThree: #363635;	
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
	box-sizing: border-box;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
    height: 100%;
    margin: 0;
	background: linear-gradient(
          rgba(0, 0, 0, 0.2), 
          rgba(0, 0, 0, 0.2)), var(--colorThree);

font-family: "Roboto", sans-serif;

	
}
* {
	user-select: none;
	::-webkit-scrollbar {
	width: 14px;
	}

	::-webkit-scrollbar-track {
	background: var(--colorOne);
	}

	::-webkit-scrollbar-thumb {
	background: var(--colorTwo);
	border-radius: 10px;
	}

	::-webkit-scrollbar-thumb:hover {
	background: var(--colorTwo);
	}
}

ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
a {
	text-decoration: none;
}

button {
	border: none;
	cursor: pointer;
}
`;
