import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body, a{
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        color: ${({ theme }) => theme.COLORS.WHITE_100};

        -webkit-font-smoothing: antialiased;
    }
    body,button,a,input,textarea{
        font-family: 'Roboto Slab', serif;
        font-size: 16px;
        outline: none;
    }
    a{
        text-decoration: none;
    }
    button, a{
        cursor: pointer;
        transition: filter 0.2s;
    }
    button:hover, a:hover{
        filter: brightness(0.9);
    }

    ::-webkit-scrollbar {
        width: 8px;
        height: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.PINK};
        border-radius: 8px;
    }
    ::-webkit-scrollbar-track {
        background-color: transparent;
        margin-top: 45px;
    }
`;