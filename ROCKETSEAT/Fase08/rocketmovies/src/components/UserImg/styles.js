import styled from "styled-components";

export const Container = styled.div`
    > img{
        width: ${({size}) => `${size}px`};
        height: ${({size}) => `${size}px`};
        border-radius: 50%;
        border: 1px solid ${({theme}) => theme.COLORS.STROKE};
    }
`;