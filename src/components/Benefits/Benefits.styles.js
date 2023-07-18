import styled from 'styled-components/macro';

export const StyledBenefits = styled.section`
    background-color: ${({ theme }) => (theme.colors.beige)};
    max-width: 100vw;
    padding: 24px;

    img {
        width: 35%;
        /* color: ${({ theme }) => (theme.colors.teal)}; */
    }

    p {
        color: ${({ theme }) => (theme.colors.teal)};
        font-size: 20px;
    }

    @media (min-width: 768px) and (max-width: 1100px) {
        padding: 32px;
    }
`

export const BenefitsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

@media (min-width: 1001px) {
    padding: 40px 72px 72px 72px;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    }
`

export const EachBenefit = styled.div`
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

@media (min-width: 1001px) {
    /* padding: 40px 72px 72px 72px; */
    flex-direction: row;
    height: 300px;
    width: 300px;
    }
`