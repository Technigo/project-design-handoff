// /////////////// IMPORT //////////////////////// //

import styled, { css } from 'styled-components';

// /////////////// COMPONENT //////////////////////// //

// Above Im importing styled-components library and css from it.
// The StartButton is created with different stylings to it. These are the props!
// The props is: outlined, ctalong, outlinedlong, outlinedlongFindOut and outlinedtablet.

export const StartButton = styled.button`
background-color: ${(props) => (props.cta ? '#F35408' : '#C94E13')};
border-radius: 8px 8px;
border: none;
color: white;
font-size: 16px;
padding: 5px 16px;
font-style: italic;

&:hover {
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
}

${(props) => props.outlined && css`
background-color: transparent;
border: 2px solid white;
color: white;
`}

${(props) => props.ctalong && css`
background-color: #F35408;
width: 262px;
height: 30px;
color: white;
`}

${(props) => props.outlinedlong && css`
background-color: transparent;
border: 2px solid white;
width: 262px;
height: 35px;
color: white;
`}

${(props) => props.outlinedlongFindOut && css`
background-color: transparent;
border: 2px solid #95A6B5;
width: 262px;
height: 35px;
color: #95A6B5;
`}

${(props) => props.outlinedtablet && css`
background-color: transparent;
border: 2px solid white;
width: 141px;
height: 35px;
color: white;
`}
`