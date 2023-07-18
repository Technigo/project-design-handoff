import styled from 'styled-components';

export const StyledFooter = styled.section`
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    padding: 24px;
    background-color: ${({ theme }) => (theme.colors.teal)};

    .icon {
        font-size: 30px;
        color: ${({ theme }) => (theme.colors.beige)}
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        padding: 32px;
        align-items: center;
    }

    @media (min-width: 1025px) {
        padding: 40px 72px 72px 72px;
        align-items: center;
    }

`

export const LogoSection = styled.div`
    display: grid;
    grid-template-columns: 70px auto;
`

export const LotusLogo = styled.div`
    position: relative;
    z-index: 0;
    display: flex;
    height: 70px; 
    grid-column: 1 / 2;
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

export const RadiantRoots = styled.p`
    align-self: center;
    margin: 10px;
    font-family: 'Abril Fatface', cursive;
    font-size: 20px;
    color: ${({ theme }) => (theme.colors.beige)};
`

export const LinksSection = styled.div`
p {
    color: ${({ theme }) => (theme.colors.beige)};
}

@media (min-width: 768px) and (max-width: 1024px) {
    display: flex;
    gap: 20px;
    border-bottom: 1px solid ${({ theme }) => (theme.colors.beige)};
}

@media (min-width: 1025px) {
    display: flex;
    gap: 20px;
    border-bottom: 1px solid ${({ theme }) => (theme.colors.beige)};
}
`

export const IconSection = styled.div`
    width: 60%;
    max-width: 440px;
    display: flex;
    justify-content: space-around;

@media (min-width: 768px) and (max-width: 1024px) {
    /* justify-content: space-evenly; */
    margin: 16px 0 0 0;
    padding: 0 0 16px 0;
    border-bottom: 1px solid ${({ theme }) => (theme.colors.beige)};
}

@media (min-width: 1025px) {
    /* justify-content: space-evenly; */
    margin: 16px 0 0 0;
    padding: 0 0 16px 0;
    border-bottom: 1px solid ${({ theme }) => (theme.colors.beige)};
}
`

export const CreditsSection = styled.div`
    color: ${({ theme }) => (theme.colors.beige)};
    font-size: 14px;
    text-align: right;
    margin: 48px 0 0 0;

a {
    color: ${({ theme }) => (theme.colors.beige)};
    font-size: 14px;
    text-align: right;
    margin: 48px 0 0 0;
}

@media (min-width: 768px) and (max-width: 1024px) {
    text-align: center;
}
@media (min-width: 1025px) {
    text-align: center;
}
`
