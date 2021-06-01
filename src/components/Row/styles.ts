import styled from 'styled-components';


export const Row = styled.div`
    display: flex;
    align-items: center;
    margin-top: 40px;

`;
export const CellTitle = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    max-width: 350px;
    width: 100%;
    border: 1px solid #D6D9DD;
    height: 77px;
    border-radius: 8px;
    padding: 10px;

    margin-right: 10px;

    > div{
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;

        >div {
            display: flex;
            flex-direction: column;

            span:first-child {
                font-size: 9px;
            }

             span:last-child {
                font-size: 14px;
                color: #8A51BA;
            }
        }


        p {
            display: block;
            max-width:154px;
            font-size: 12px;
            color: #4E5B61;
        }
    }
    span {
        font-size: 9px;

        svg {
            width: 9px;
            height: 9px;
            margin-left: 10px;
        }
    }
`;
export const CellMyPosition = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    

    max-width: 459px;
    width: 100%;
    border: 1px solid #D6D9DD;
    height: 77px;
    border-radius: 8px;
    padding: 10px;

    margin-right: 10px;


        span {
        font-size: 9px;

        svg {
            width: 9px;
            height: 9px;
            margin-left: 10px;
        }
    }

    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;


        div {
            display: flex;
            flex-direction: column;
            align-items: flex-start;


            span:first-child {
                color: #4E5B61;
                font-size: 9px;
            }

            span:last-child {
                font-size: 16px;
                color: #38BFA0;
            }
        }
    }
`;
export const DueDate = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    

    flex: 1;
    border: 1px solid #D6D9DD;
    height: 77px;
    border-radius: 8px;
    padding: 10px;

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;


        div {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }

        span:first-child {
                color: #4E5B61;
                font-size: 9px;
        }

        span:last-child {
            font-size: 16px;
            color: #008DCB;
        }
    }
`;