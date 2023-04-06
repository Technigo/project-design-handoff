import styled, { css } from 'styled-components';

export const CTA = styled.button`
    background-color: #D69A2A;
    border-radius: 0.7rem;
    color: #F5F5F5;
    font-family: 'Libre Baskerville', serif;
    width: ${props => (props.own ? '90%' : '290px')};
    padding: 1rem;
    border: none;
    width: 345px;
    height: 56px;

    &:active {
        background-color: #AC7816;
    }


${props => props.alone && css`
    margin: 44px 22px;
`}
`

export default CTA