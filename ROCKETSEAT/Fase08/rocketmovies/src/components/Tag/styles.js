import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    border-radius: 8px;
    width: min-content;
    white-space: nowrap;
    padding: 8px 16px;
`;