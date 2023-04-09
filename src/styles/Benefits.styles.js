import styled from 'styled-components';

export const StyledBenefits = styled.section`
    background-color: ${({ theme }) => (theme.colors.beige)};
    max-width: 100vw;
    padding: 24px;

    .benefits-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .each-benefit {
        width: 100%;
        max-width: 450px;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 12px;
        /* border: 1px black solid;  */
        padding: 24px;
        box-shadow: 0 0 15px 5px #c2b3a3;
        margin: 10px 0;
    }

    img {
        width: 35%;
        /* color: ${({ theme }) => (theme.colors.teal)}; */
    }

    h2 {
        color: ${({ theme }) => (theme.colors.teal)};
        width: 90%;
    }

    p {
        color: ${({ theme }) => (theme.colors.teal)};
        font-size: 20px;
    }

    @media (min-width: 768px) and (max-width: 1100px) {
        padding: 32px;
    }

    @media (min-width: 1001px) {
        padding: 40px 72px 72px 72px;
        flex-direction: row;

        .benefits-wrapper {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-evenly;
        }

        .each-benefit {
            height: 300px;
            width: 300px;
        }


    }

`