import styled from 'styled-components';

export const StyledFooter = styled.section`
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    padding: 24px;
    background-color: ${({ theme }) => (theme.colors.teal)};

    .logo-section {
        display: grid;
        grid-template-columns: 70px auto;
      
    }

    .lotus-logo {
        position: relative;
        z-index: 0;
        display: flex;
        height: 70px; 
        grid-column: 1 / 2;
    }

    .hexagon {
        width: 70px;
        /* align-self: flex-start; */
        position: absolute;
        z-index: 1;
    }

    .lotus {
        width: 40px;
        position: absolute;
        z-index: 2;
        margin: 15px;
    }
    .radiant-roots {
        align-self: center;
        margin: 10px;
        font-family: 'Abril Fatface', cursive;
        font-size: 20px;
        color: ${({ theme }) => (theme.colors.beige)};
    }

    .links-section p {
        color: ${({ theme }) => (theme.colors.beige)};
    }

    .icon-section {
        width: 60%;
        max-width: 440px;
        display: flex;
        justify-content: space-around;
    }

    .icon {
        font-size: 30px;
        color: ${({ theme }) => (theme.colors.beige)}
    }

    .credits, .credits a {
        color: ${({ theme }) => (theme.colors.beige)};
        font-size: 14px;
        text-align: right;
        margin: 48px 0 0 0;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        padding: 32px;
        align-items: center;

    .links-section {
        display: flex;
        gap: 20px;
        border-bottom: 1px solid ${({ theme }) => (theme.colors.beige)};
    }

    .icon-section {
        /* justify-content: space-evenly; */
        margin: 16px 0 0 0;
        padding: 0 0 16px 0;
        border-bottom: 1px solid ${({ theme }) => (theme.colors.beige)};
    }

    .credits, .credits a {
        text-align: center;
    }
    }

    @media (min-width: 1025px) {
        padding: 40px 72px 72px 72px;
        align-items: center;

    .links-section {
        display: flex;
        gap: 20px;
        border-bottom: 1px solid ${({ theme }) => (theme.colors.beige)};
    }

    .icon-section {
        /* justify-content: space-evenly; */
        margin: 16px 0 0 0;
        padding: 0 0 16px 0;
        border-bottom: 1px solid ${({ theme }) => (theme.colors.beige)};
    }

    .credits, .credits a {
        text-align: center;
    }
    }

`