import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus{
        outline: 0;
        /* box-shadow: 0 0 0 2px ${props => props.theme["yellow-dark"]}; */
    }

    body{
        font: 400 1rem/1.6 'Roboto', sans-serif;
        background: ${props => props.theme["background"]};
        color: ${props => props.theme["base-text"]};
    }

    /* header{
        font: 700 1.125rem/1.6 'Baloo 2', cursive;
    } */
`