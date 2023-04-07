import styled from 'styled-components';

export const StyledForm = styled.section`
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => (theme.colors.white)};
    margin: 24px;
    padding: 0 24px;
    border-radius: 12px;

    h2 {
        color: ${({ theme }) => (theme.colors.teal)};
    }

    form {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    input {
        border: 2px solid ${({ theme }) => (theme.inputs.passive)};
        border-radius: 10px;
        font-family: 'Libre Baskerville', serif;
        font-size: 14px;
        padding: 1em;
        color: black;
        margin: 10px 0;
    }

    input:invalid {
        border: 2px solid ${({ theme }) => (theme.inputs.invalid)};
    }

    /* input:valid {
        border: 2px solid ${({ theme }) => (theme.inputs.valid)};
    } */

    .buttons {
        display: flex;
        justify-content: space-evenly;
        margin: 0 0 10px 0;
    }

    button {
        width: 40%;
        border-radius: 12px;
        font-size: 16px;
        font-weight: bold;
        height: 3em;
        font-family: 'Libre Baskerville', serif;
    }

    .log-in {
        background-color: transparent;
        color: ${({ theme }) => (theme.colors.teal)};
        border: 1px solid ${({ theme }) => (theme.colors.teal)} ;
    }

    .submit {
        background-color: ${({ theme }) => (theme.colors.teal)};
        color: ${({ theme }) => (theme.colors.white)};
        border: 1px solid ${({ theme }) => (theme.colors.teal)} ;
    }

    .submit:disabled {
        background-color: ${({ theme }) => (theme.inputs.passive)};
        border: 1px solid ${({ theme }) => (theme.inputs.passive)} ;
    }

    h3 {
        font-size: 32px;
        margin: 0;
    }

    .price {
        font-size: 32px;
        margin: 10px 0 5px 0;
        font-weight: bold;
    }

    .payment {
        font-size: 12px;
        font-weight: bold;
        margin: 0;
    }

    .subtitle {
        font-size: 20px;
        width: 60%;
    }

    .plan-details p {
        border-bottom: 1px solid;
        padding:15px 0;
        margin: 0;
    }

    .plan-card {
        background-color: ${({ theme }) => (theme.colors.beige)};
        color: ${({ theme }) => (theme.colors.teal)};
        width: 100%;
        border-radius: 12px;
        padding: 24px;
        /* box-shadow: 0 0 15px 5px #AC7816; */
        margin: 15px 0;
        display: flex;
        flex-direction: column;
    }

    .plan-card button {
        width: 170px;
        height: 2em;
        align-self: flex-start;
        background: transparent;
        border-radius :12px;
        border: 1px solid #02393F;
        font-family: 'Libre Baskerville', serif;
        font-size: 16px;
        margin: 15px 0 0 0; 
        color: ${({ theme }) => (theme.colors.teal)};
    }
`