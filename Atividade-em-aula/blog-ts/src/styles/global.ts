import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        font-family: Open Sans, sans-serif;
        line-height: 140%;
        color: ${({ theme }) => theme.colors.textColor};
        background-color: ${({ theme }) => theme.colors.backgroundColor};
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: Kumbh Sans, sans-serif;
    }

    img {
        width: 100%;
    }
`
