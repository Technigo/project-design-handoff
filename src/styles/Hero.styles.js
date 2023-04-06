import styled from 'styled-components';

export const StyledHero = styled.section`
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    padding: 24px;
    background-image: url('/assets/ladytwisting.png');
    background-size: cover;

    div {
        display: flex;
        /* height: 40vh; */
        width: 100%;
        justify-content: space-between;
    }

    img {
        width: 73px;
        align-self: flex-start;
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