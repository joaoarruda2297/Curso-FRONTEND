import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.PINK};
    border: none;
    border-radius: 10px;
    padding: 17px;
`;