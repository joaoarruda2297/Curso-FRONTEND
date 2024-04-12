import styled from "styled-components";
import backgroundImage from "../../assets/bgImage.png";

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    padding: 0 163px;

    > h1{
        color: ${({theme}) => theme.COLORS.PINK};
        font-size: 48px;
    }
    > p{
        font-size: 14px;
        color: ${({theme}) => theme.COLORS.WHITE_400};
        align-self: baseline;
    }
    > h2{
        margin: 48px 0;
        font-size: 24px;
        align-self: baseline;
    }
    > div{//refere-se ao input
        margin-bottom: 10px;
    }
    > a{
        margin-top: 42px;
        color: ${({theme}) => theme.COLORS.PINK};
    }
    > button{
        margin-top: 14px;
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImage}) no-repeat center center;
    background-size: cover;
`;