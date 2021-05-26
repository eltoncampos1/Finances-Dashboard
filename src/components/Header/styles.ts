import styled from 'styled-components';


export const Header = styled.header`
    width: 100%;
    height: 90px;

    grid-area: header;
`;
export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1366px;
    margin: 0 auto;
    width: 100%;
    height: 100%;

    padding: 30px 50px 30px 28px;
`;
export const Logo = styled.div`

`;


export const HeaderInfos = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const InfoContent = styled.div`
    display: flex;
    padding-right: 30px;

    div {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        margin-left: 10px;
        
         span:first-child {
            font-size: 8px;
        }

        span:last-child {
            font-size: 16px;
            font-weight: 700;
        }
    }
`;
export const MenuIcon = styled.header``;