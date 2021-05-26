import styled from 'styled-components';


export const Container = styled.section`
    grid-area: aside;
    width: 100%;
    height: 100%;

    background: #F8FAFB;

    div {
        display: flex;
        align-items: center;


        span {
            margin-left: 14px;
            font-size: 13px;
            font-weight: 500;

            max-width: 80px;
        }
    }

    ul {
        list-style: none;
    }

    li {
        padding: 15px;
        display: block;
        max-width: 226px;
        max-height: 67px;

        transition: .3s ease;
    }

    li + li {
       border-top: 1px solid #CCCFD1;
    }

    li:last-child {
       border-bottom: 1px solid #CCCFD1;
    }

    li a{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    li:hover {
        filter: brightness(0.8);
        background: #F8FAFB;
    }

    a {
        text-decoration: none;
        color: #707B81;
    }
`;