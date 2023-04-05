import styled from 'styled-components';

export const Headline1 = styled.h1`
    font-size: 56px;
    font-weight: 700;

    @media (min-width: 1024px) {
        font-size: 96px;
    }
`;

export const Headline2 = styled.h2`
    font-size: 48px;
    font-weight: 700;

    @media (min-width: 667px) {
        font-size: 64px;
}`;

export const Headline3 = styled.h3`
    font-size: 36px;
    font-weight: 700;

    @media (min-width: 667px) {
        font-size: 48px;
    }
`;

export const Headline4 = styled.h4`
    font-size: 32px;
    font-weight: 700;
    line-height: 32px;

    @media (min-width: 667px) {
        font-size: 36px;
    }
`;

export const Headline5 = styled.h5`
    font-size: 24px;
    font-weight: 700;
    text-align: center;

    @media (min-width: 667px) {
        font-size: 32px;
    }
`;

export const Tagline = styled.p`
    font-size: 18px;
    text-transform: uppercase;
    text-align: center;
    margin: 10px;
`;

export const Body = styled.p`
    font-size: 16px;
    margin-top: 8px;

    @media (min-width: 667px) {
        font-size: 18px;
    }
`;

export const Error = styled.p`
    font-size: 12px;
    color: red;

    @media (min-width: 667px) {
        font-size: 14px;
    }
`;