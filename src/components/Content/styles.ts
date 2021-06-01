import styled from 'styled-components';


export const Container = styled.section`
    grid-area: content;
    background-color:#EEF2F4;
`;

export const TopContent = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;


    padding: 15px 20px;
    > div {
        display: flex;
    }

    h2 {
        display: block;
        padding:20px 20px 20px 10px;
        color: #4C309B;

        font-size: 20px;
        font-weight: 700;
    }
`
export const TableCell = styled.div`
    max-width: 1090px;
    margin: 0 auto;
    background: #fff;

    border-radius: 10px;
    padding: 16px 19px;

`;
export const Header = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
        display: flex;
    }

    h2 {
        font-size: 18px;
        font-weight: 500;
    }

    .input {
        max-width: 240px;
        border-radius: 5px;
        border: none;
        border: 1px solid #D6D9DD;
        height: 32px;
        padding: 5px;
        margin-left: 17px;
    }

    input {
        border: none;
        outline: none;
        padding-left: 5px;
    }

    select {
       width:155px;
        height: 32px;
        border-radius: 8px;
        border: 1px solid #D6D9DD;

        font-size: 12px;
        color: #707B81;
        outline: none;
    }
`;

