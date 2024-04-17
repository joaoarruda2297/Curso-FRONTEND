import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
    > img{
        width: ${({size}) => `${size ?? 64}px`};
        height: ${({size}) => `${size ?? 64}px`};
        border-radius: 50%;
        border: 1px solid ${({theme}) => theme.COLORS.STROKE};
    }
`;