import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
    html, body {
        padding:0;
        margin:0;
        height: 100%;
        width: 100%;
    }

    body {
        font-family: 'Open Sans', Helvetica, Arial, sans-serif;
    }
    
    h1, h2, h3 {
        font-family: 'Open Sans Bold', Helvetica, Arial, sans-serif;
    }
    
    @font-face {
        font-family: 'Open Sans';
        src: url('OpenSans-Regular.ttf');
        src: url('OpenSans-Regular.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
    }
    
    @font-face {
        font-family: 'Open Sans Bold';
        src: url('OpenSans-Bold.ttf');
        src: url('OpenSans-Bold.ttf') format('truetype');
        font-weight: bold;
        font-style: bold;
    }
    
    #app {
        background-color: #fafafa;
        min-height: 100%;
        min-width: 100%;
    }
    
    p, label {
        line-height: 1.5em;
    }
`;
