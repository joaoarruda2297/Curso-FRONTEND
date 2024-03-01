import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
    border-radius: 16px;
    padding: 32px;
    height: 222.85px;

    > .card-header h1{
        margin-bottom: 8px;
        font-size: 24px;
    }

    > p{
        font-family: 'Roboto', sans-serif;
        font-size: 11.5px;
        color: ${({theme}) => theme.COLORS.WHITE_300};
        width: 100%;
        /* this code clamps based on specified lines */
        overflow: hidden;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        display: -webkit-box;
        margin: 15px 0;
    }

    > #tags{
        display: flex;
        flex-direction: row;
        gap: 8px;

        div{
            background-color: ${({theme}) => theme.COLORS.BLACK};
        }
    }
`;