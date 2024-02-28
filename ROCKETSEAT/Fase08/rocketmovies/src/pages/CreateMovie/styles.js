import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-rows: 116px auto;
    grid-template-areas: 
    "header"
    "content";

    > main{
        grid-area: content;
        padding: 40px 0;
    }
`;

export const Content = styled.div`
    overflow-y: auto;
    margin: 0 auto;
    max-width: 1100px;
    height: 600px;
    padding: 0 16px 0 0;

    > h1{
        margin: 24px 0 40px;
    }

    > .twoInputs{
        display: flex;
        flex-direction: row;
        gap: 40px;
    }

    > TextArea{
        margin: 40px 0;
    }

    > h2{
        font-size: 20px;
        color: ${({theme}) => theme.COLORS.WHITE_300};
        font-weight: 400;
        margin-bottom: 24px;
    }

    > .boxMarker{
        width: 100%;

        display: flex;
        flex-direction: row;
        gap: 24px;

        padding: 16px;
        border-radius: 8px;

        background-color: ${({theme}) => theme.COLORS.BLACK_100};

        margin-bottom: 40px;
    }

    .boxButton{
        display: flex;
        flex-direction: row;
        gap: 40px;

        .delete-button{
            background-color: ${({theme}) => theme.COLORS.BLACK_100};
            color: ${({theme}) => theme.COLORS.PINK};
        }
    }
`;