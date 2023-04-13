import styled, { css } from 'styled-components';

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
  transform: scale(1.1);
}
${(props) => props.outlined && css`
background-color: transparent;
border: 1px solid white;
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
border: 1px solid white;
width: 262px;
height: 35px;
color: white;
`}
`
