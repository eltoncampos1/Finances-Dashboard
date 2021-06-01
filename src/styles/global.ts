import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
    @font-face {
    font-family: 'helveticaneuebold';
    src: url('helveticaneue_bold-webfont.woff2') format('woff2'),
         url('helveticaneue_bold-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;

    }




    @font-face {
        font-family: 'helveticaneueregular';
        src: url('helveticaneue-regular-webfont.woff2') format('woff2'),
            url('helveticaneue-regular-webfont.woff') format('woff');
        font-weight: normal;
        font-style: normal;

    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        font-size: 62.5%;
    }
    html, body {
        height: 100%;
    }

    body {
        font-family: 'Montserrat', sans-serif;
        -webkit-font-smoothing: antialiased;
        color: #707B81;
        background: #EEF2F4;
    }


    p, span {
        font-weight: 500;
    }
`;