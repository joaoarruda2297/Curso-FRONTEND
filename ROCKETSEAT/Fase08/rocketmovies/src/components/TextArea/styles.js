import styled from "styled-components";

export const TextArea = styled.textarea`
    background-color: ${({theme}) => theme.COLORS.GRAY_300};
    border: none;
    border-radius: 10px;
    width: 100%;
    height: 274px;
    resize: none;
    padding: 19px 16px;
    color: ${({theme}) => theme.COLORS.WHITE_100};

    &::placeholder{
        color: ${({theme}) => theme.COLORS.GRAY_100};
    }
`;