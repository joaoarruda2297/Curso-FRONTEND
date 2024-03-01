import styled from "styled-components";

export const Container = styled.div`
    > img{
        width: ${({size}) => `${size ?? 64}px`};
        height: ${({size}) => `${size ?? 64}px`};
        border-radius: 50%;
        border: 1px solid ${({theme}) => theme.COLORS.STROKE};
    }
`;