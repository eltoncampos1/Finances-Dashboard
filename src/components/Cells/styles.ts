import styled from 'styled-components';


export const Container = styled.section`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

`;
export const Cell = styled.div`
    max-width: 172px;
    height: 60px;
    border-radius: 10px;
    width: 100%;
    background: #fff;
    padding: 14px 19px;
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    span:first-child {
        font-size: 9px;
        font-weight: 600;
        text-transform: uppercase;
    }

    span:last-child {
        font-weight: 700;
        font-size: 14px;
        color: #4C309B;
    }

    &::before {
        content: '';
        height:38px;
        width: 2px;
        background-color: #DAE0E3;
        position: absolute;
        left: 8px;
    }

    & + div {
        margin-left: 10px;
    }

`;