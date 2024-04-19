import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 16px;
    border-radius: 10px;
    background-color: ${({$isNew, theme}) => $isNew ? "transparent" : theme.COLORS.GRAY_300};
    border: ${({$isNew, theme}) => $isNew ? `2px dashed ${theme.COLORS.GRAY_100}` : "none"};
    
    > input, button{
        border: none;
        background-color: transparent;
    }

    > input{
        color: ${({theme}) => theme.COLORS.WHITE};
        cursor: ${({$isNew}) => $isNew? "text" : "auto"};

        &::placeholder{
            color: ${({theme}) => theme.COLORS.GRAY_100};
        }
    }
    
    > button{
        color: ${({theme}) => theme.COLORS.PINK};
        align-self: flex-end;
    }


`;