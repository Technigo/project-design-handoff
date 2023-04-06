import styled from 'styled-components';

export const StyledFooter = styled.section`
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    padding: 24px;
    background-color: ${({ theme }) => (theme.colors.teal)};

    .logo-section {
        display: flex;
        flex-direction: row;
    }

    img {
        width: 73px;
        align-self: flex-start;
    }

    .logo-section p {
        align-self: center;
        margin: 10px;
        font-family: 'Abril Fatface', cursive;
        font-size: 20px;
        color: ${({ theme }) => (theme.colors.beige)}
    }

    .links-section p {
        color: ${({ theme }) => (theme.colors.beige)}
    }

    .icon-section {
        width: 60%;
        display: flex;
        justify-content: space-between;
    }

    .icon {
        font-size: 40px;
        color: ${({ theme }) => (theme.colors.beige)}
    }

`