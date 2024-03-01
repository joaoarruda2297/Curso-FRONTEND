import styled from "styled-components";

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

    > .movie-title{
        display: flex;
        flex-direction: row;
        align-items: baseline;
        gap: 19px;
        margin: 24px 0;

        svg{
            margin-bottom: 2px;
        }
    }

    > .movie-creator{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 8px;
    }

    > .tags{
        display: flex;
        flex-direction: row;
        gap: 8px;
        margin: 40px 0;
    }
`;