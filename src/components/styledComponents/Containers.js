
import styled from 'styled-components';

export const FlexContainer = styled.section`
box-sizing: border-box;
height:${(props) => props.height || '100%'};
width:${(props) => props.width || '100%'};
display: flex;
flex-direction: column;
justify-content: ${(props) => props.justifyContent || 'flex-start'};
position:relative;
align-items: center;
background:${(props) => props.background};
border-radius:${(props) => props.borderRadius || 'none'};
padding:0 8px;
gap:${(props) => props.gap || '0px'};
`

export const GridContainer = styled.section`
height:100%;
width:100%;
display: grid;
flex-direction: column;
justify-content: flex-start;
position:relative;
align-items: center;
`

export const UnorderedList = styled.ul`
color:#F7FEFF;
display: list-item;
padding:10px 0;
text-align:center;
width:70%;
`