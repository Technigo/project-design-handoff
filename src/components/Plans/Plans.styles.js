import styled from 'styled-components/macro';

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

    @media (min-width: 768px) and (max-width: 1024px) {
        padding: 32px;
    }

    @media (min-width: 1025px) {
        padding: 40px 72px 72px 72px;
    }

`

export const PlanWrapper = styled.div`
    @media (min-width: 768px) and (max-width: 1024px) {
            display: flex;
            justify-content: space-evenly;
            width: 100%;
    }

    @media (min-width: 1025px) {
            display: flex;
            justify-content: space-evenly;
            width: 100%;
            max-width: 1450px;    
    }
`

export const PlanCard = styled.div`
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

:hover {
    background-color: ${({ theme }) => (theme.colors.cream)};
    transform: scale(1.05);
    transition: transform 0.1s ease-in-out;
    font-weight: bold;
}
`

export const PlanButton = styled.button`
    width: 170px;
    height: 2em;
    align-self: flex-start;
    background: transparent;
    border-radius :12px;
    border: 1px solid #02393F;
    font-family: 'Libre Baskerville', serif;
    font-size: 16px;
    margin: 15px 0 0 0; 

:active {
    transform: scale(.9);
}

${PlanCard}:hover & {
    background-color: ${({ theme }) => (theme.colors.teal)};
    color: ${({ theme }) => (theme.colors.white)};
}
`

export const PlanPrice = styled.p`
    font-size: 32px;
    margin: 10px 0 5px 0;
    font-weight: bold;
`

export const PlanPayment = styled.p`
    font-size: 12px;
    font-weight: bold;
    margin: 0;
`

export const PlanSubtitle = styled.p`
    font-size: 20px;
    width: 60%;

`

export const PlanDetails = styled.div`

p {
    border-bottom: 1px solid;
    padding:15px 0;
    margin: 0;
}
`