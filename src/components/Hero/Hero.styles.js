import styled from 'styled-components/macro';

export const StyledHero = styled.section`
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    padding: 24px;
    background-image: url('/assets/ladytwisting.png');
    background-size: cover;
    background-position: top;

    h1 {
        font-size: 32px;
        color: ${({ theme }) => (theme.colors.white)};
        line-height: 1.5em;
        max-width: 550px; 
    }

    p {
        font-size: 20px;
        color: ${({ theme }) => (theme.colors.white)};
        line-height: 1.5em;
        margin: 0;
        max-width: 550px; 
    }

    .icon {
        font-size: 40px;
        align-self: center;
        color: ${({ theme }) => (theme.colors.white)}
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        padding: 32px;
    }

    @media (min-width: 1025px) {
        padding: 40px 72px 72px 72px;

        .nav-bar {
            margin: 0 0 15% 0;
        }
    }
`

export const NavBar = styled.div`
        display: flex;
        height: 70px;
        width: 100%;
        justify-content: space-between;
        margin: 0 0 30% 0;
`

export const LotusLogo = styled.div`
        position: relative;
        z-index: 0;
        display: flex;
`

export const Hexagon = styled.img`
        width: 70px;
        /* align-self: flex-start; */
        position: absolute;
        z-index: 1;
`

export const Lotus = styled.img`
        width: 40px;
        position: absolute;
        z-index: 2;
        margin: 15px;
`