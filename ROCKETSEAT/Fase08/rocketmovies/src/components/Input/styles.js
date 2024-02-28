import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    background-color: ${({theme}) => theme.COLORS.GRAY_300};
    border-radius: 10px;

    > input{
        width: 100%;
        border: none;
        padding: 19px 16px;

        color: ${({theme}) => theme.COLORS.WHITE_100};
        background: transparent;

        &::placeholder{
            color: ${({theme}) => theme.COLORS.GRAY_100};
        }
    }

    > svg{
        margin-left: 16px;
        color: ${({theme}) => theme.COLORS.GRAY_100};
    }
`;