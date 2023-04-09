import styled, { css } from 'styled-components';

export const CTA = styled.button`
    background-color: #D69A2A;
    border-radius: 0.7rem;
    color: #F5F5F5;
    font-family: 'Libre Baskerville', serif;
    font-weight: 700;
    font-size: 16px;
    text-align: center;
    padding: 16px 64px;
    border: none;

    &:active {
        background-color: #AC7816;
    }

    @media(min-width: 768px) and (max-width: 1024px) {
        font-size: 20px;
    }

    @media(min-width: 1024px) {
        font-size: 24px;
    }

${props => props.choose && css`
    background: #D0C4B8;
    font-size: 16px;
    padding: 8px 36px;
    color: #02393F;
    border: 0.5px solid #000000;
    border-radius: 12px
`}

${props => props.chosen && css`
    font-weight: 700;
    background: #02393F;
    font-size: 16px;
    padding: 8px 36px;
    color: #F5F5F5;
    border: none;
    border-radius: 12px
`}
`

export default CTA