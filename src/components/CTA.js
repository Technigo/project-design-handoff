import styled, { css } from 'styled-components';

export const CTA = styled.button`
    background-color: #D69A2A;
    border-radius: 0.7rem;
    color: #F5F5F5;
    font-family: 'Libre Baskerville', serif;
    font-weight: 700;
    width: ${props => (props.own ? '90%' : '290px')};
    padding: 1rem;
    border: none;
    width: 345px;
    height: 56px;
    scroll-behavior: smooth;

    &:active {
        background-color: #AC7816;
    }

${props => props.choose && css`
    width: unset;
    background: #D0C4B8;
    font-size: 16px;
    padding: 8px 36px;
    color: #02393F;
    border: 0.5px solid #000000;
    border-radius: 12px
`}
`

export default CTA