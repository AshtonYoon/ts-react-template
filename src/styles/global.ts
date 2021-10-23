import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
    ${normalize}

    html,
    body {
        overflow: hidden;
        background: #19160f;
        color: white;
    }

    * {
        box-sizing: border-box;
    }

    a {
        color: #14978c;
        text-decoration: none;
        &:hover {
            cursor: pointer;
        }
    }
`;

export default GlobalStyle;
