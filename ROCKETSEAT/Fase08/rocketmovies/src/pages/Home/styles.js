import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-rows: 116px auto;
    grid-template-areas: 
    "header"
    "content";

    > main{
        grid-area: content;
        padding: 40px 123px;
        width: 1100px;

        justify-self: center;

        > #little-header{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;

            > .addMovie{
                width: 207px;
            }
        }
    }
`;


export const Content = styled.div`
    overflow-y: auto;
    margin: 40px auto 0;
    height: 600px;
    padding: 0 16px 0 0;

    display: flex;
    flex-direction: column;
    gap: 24px;
`;