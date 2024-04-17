import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
    grid-area: header;
    
    width: 100%;
    height: 116px;
    padding: 0 123px;
    
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 64px;

    border-bottom: 1px solid ${({theme}) => theme.COLORS.STROKE};

    > h1{
        font-size: 24px;
        color: ${({theme}) => theme.COLORS.PINK};
    }
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    gap: 9px;

    > div{
        font-size: 14px;

        display: flex;
        flex-direction: column;
        align-items: end;

        .logoutButton{
            color: ${({theme}) => theme.COLORS.GRAY_100}
        }

        .userName{
            white-space: nowrap;
        }
    }
`;
