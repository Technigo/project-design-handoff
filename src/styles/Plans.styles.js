import styled from 'styled-components';

export const StyledPlans = styled.section`
    background-color: ${({ theme }) => (theme.colors.yellow)};
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
    color: ${({ theme }) => (theme.colors.cream)};

    h2 {
        align-self: flex-start;
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
        max-width: 290px;
        border-radius: 12px;
        padding: 24px;
        box-shadow: 0 0 15px 5px #AC7816;
        margin: 15px 0;
        display: flex;
        flex-direction: column;
    }

    .plan-card:hover {
        background-color: ${({ theme }) => (theme.colors.cream)};
        transform: scale(1.05);
        transition: transform 0.1s ease-in-out;
        font-weight: bold;
    }

    .plan-card:hover > button {
        background-color: ${({ theme }) => (theme.colors.teal)};
        color: ${({ theme }) => (theme.colors.white)};
    }

    button {
        width: 170px;
        height: 2em;
        align-self: flex-start;
        background: transparent;
        border-radius :12px;
        border: 1px solid #02393F;
        font-family: 'Libre Baskerville', serif;
        font-size: 16px;
        margin: 15px 0 0 0; 
    }

    button:active {
        transform: scale(.9);
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        padding: 32px;

        .plan-wrapper {
            display: flex;
            justify-content: space-evenly;
            width: 100%;
        }
    }

    @media (min-width: 1025px) {
        padding: 40px 72px 72px 72px;

        .plan-wrapper {
            display: flex;
            justify-content: space-evenly;
            width: 100%;
            max-width: 1450px;
        }
    
    }

`