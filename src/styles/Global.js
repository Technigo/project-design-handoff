import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components/macro';

export const GlobalStyles = createGlobalStyle`
   * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: 'Libre Baskerville', serif;
    }
`

export const Header1 = styled.h1`
    font-size: 32px;
    color: ${({ theme }) => (theme.colors.white)};
    line-height: 1.5em;
    max-width: 550px;
`

export const Header2 = styled.h2`
    color: ${(props) => props.headerColor || '#FF0000'};
    align-self: flex-start;
    width: 90%;
    max-width: 550px;
`

export const Header3 = styled.h3`
    font-size: 32px;
    margin: 0;
`

export const SectionDescription = styled.p`
    color: ${(props) => props.descColor || '#FF0000'};
    font-size: 16px;
    max-width: 550px;
    align-self: flex-start;
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
export const PlanCardStatic = styled.div`
    background-color: ${({ theme }) => (theme.colors.beige)};
    color: ${({ theme }) => (theme.colors.teal)};
    width: 100%;
    max-width: 290px;
    border-radius: 12px;
    padding: 24px;
    margin: 15px 0;
    display: flex;
    flex-direction: column;
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
    color: ${({ theme }) => (theme.colors.teal)};

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
    max-width: 240px;
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