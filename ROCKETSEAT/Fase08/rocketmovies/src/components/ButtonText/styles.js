import styled from "styled-components";

export const Container = styled.div`

    > a{
        display: flex;
        align-items: center;
        color: ${({theme}) => theme.COLORS.PINK};
        gap: 8px;
        background-color: transparent;
    }
`;