import styled from 'styled-components';


export const GridContainer = styled.div`
    height: 100vh;
    width: 100%;
    display: grid;
    grid-template-columns: 226px auto;
    grid-template-rows: 90px auto;

    grid-template-areas:
    "header header"
    "aside content";


    max-width: 1366px;
    margin: 0 auto;
`;