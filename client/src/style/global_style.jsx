import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        scroll-behavior: smooth;
    }
    html, body {margin: 0; padding: 0; }
    html {
        font-size: 100%; /* = 16px default */
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    body {
        font-family: 'Roboto', Helvetica, sans-serif;

        a { text-decoration: none; }
        input { border: transparent; }
        ul { margin: 0; padding: 0;}
        ul li { list-style: none; }
        button { display: block; border: none; }

        transition: all 0.3s ease-in-out;
    }
`
