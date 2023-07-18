import styled from 'styled-components/macro';

export const StyledRegistrationModal = styled.section`
    display: flex;
    flex-direction: column;
    background-color: rgb(0,0,0, 0.3);
    position: fixed;
    z-index: 4;
    top: 0;
    left: 0;
    right: 0;
    overflow-y: scroll;
    height: 100vh;

    .icon {
        font-size: 18px;
        color: ${({ theme }) => (theme.colors.teal)};
        margin: 14px 0 14px 14px;
    }

    form {
        /* max-width: 550px; */
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: ${({ theme }) => (theme.colors.white)};
        margin: 24px;
        padding: 0 24px 12px 24px;
        border-radius: 12px;
        align-self: center
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
`

export const InputSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const FormHeader = styled.div`
    display: flex;
    justify-content: space-between;
`

export const ButtonSection = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 0 0 10px 0;
`

export const Button = styled.button`
    width: 40%;
    border-radius: 12px;
    font-size: 16px;
    font-weight: bold;
    height: 3em;
    font-family: 'Libre Baskerville', serif;
    border: 1px solid ${({ theme }) => (theme.colors.teal)} ;
    background-color: ${(props) => props.buttonColor || '#02393F'};
    color: ${(props) => props.textColor || '#F5F5F5'};

:disabled {
    background-color: ${({ theme }) => (theme.inputs.passive)};
    border: 1px solid ${({ theme }) => (theme.inputs.passive)} ;
}
`

export const PlanSection = styled.div`

`