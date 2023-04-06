import styled from 'styled-components';

export const StyledHero = styled.section`
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    padding: 24px;
    background-image: url('/assets/ladytwisting.png');
    background-size: cover;
    background-position: top;

    .nav-bar {
        display: flex;
        height: 70px;
        width: 100%;
        justify-content: space-between;
    }

    .lotus-logo {
        position: relative;
        z-index: 0;
        display: flex;
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



    h1 {
        font-size: 32px;
        color: ${({ theme }) => (theme.colors.white)};
        line-height: 1.5em;
    }

    p {
        /* align-self: center;
        justify-self: flex-start; */
        font-size: 20px;
        color: ${({ theme }) => (theme.colors.white)};
        line-height: 1.5em;
    }

    .icon {
        font-size: 40px;
        align-self: center;
        color: ${({ theme }) => (theme.colors.white)}
    }
`