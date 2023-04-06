import styled from 'styled-components';

export const StyledBenefits = styled.section`
    background-color: ${({ theme }) => (theme.colors.beige)};
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;

    div {
        width: 95%;
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

`