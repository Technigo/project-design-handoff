import styled, { css } from 'styled-components';

export const CTA = styled.button`
    background-color: #D69A2A;
    border-radius: 0.7rem;
    color: #F5F5F5;
    font-family: 'Libre Baskerville', serif;
    font-weight: 700;
    font-size: 16px;
    padding: 16px 64px;
    border: none;

    &:active {
        background-color: #AC7816;
    }

    @media(min-width: 768px) and (max-width: 1024px) {
        font-size: 20px;    
    }

    @media(min-width: 1025px) {
        font-size: 20px;
    }

${props => props.choose && css`
    background-color: transparent;
    font-size: 16px;
    padding: 8px 36px;
    line-height: 150%;
    color: #02393F;
    border: 0.5px solid #000000;
    border-radius: 12px

`}

${props => props.small && css`
    background-color: transparent;
    font-size: 13px;
    font-weight: 700;
    padding: 8px 16px;
    line-height: 160%;
    color: #02393F;
    border: 0.3px solid #02393F;
    border-radius: 12px;
    
    @media(min-width: 768px) {
    width: 169px;
    height: 37px;
    font-size: 13px;
}

`}

${props => props.chosen && css`
    font-weight: 700;
    background: #02393F;
    font-size: 16px;
    padding: 8px 36px;
    color: #F5F5F5;
    border: none;
    border-radius: 12px

    @media(min-width: 768px)  {
        width: 242px;
        height: 46px;
    }
`}
`

export default CTA