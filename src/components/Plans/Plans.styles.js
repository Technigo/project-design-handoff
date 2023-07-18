import styled from 'styled-components/macro';

export const StyledPlans = styled.section`
    background-color: ${({ theme }) => (theme.colors.yellow)};
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
    color: ${({ theme }) => (theme.colors.cream)};

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