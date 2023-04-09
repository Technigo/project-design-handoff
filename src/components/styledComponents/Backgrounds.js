import styled from 'styled-components';

export const Background = styled.img`
position:fixed;
height:100%;
width:100%;
object-fit:cover;
z-index:-2;
top:0;
left: 0px;
`

export const BackgroundColor = styled.div`
background:${(props) => props.background || '#FFE600'};
display:flex;
align-items:center;
width:${(props) => props.width || '33%'};
z-index:-1;
height:${(props) => props.height || '100%'};
position:absolute;
top:0;

  @media (min-width: 1024px) {
background:${(props) => props.background || '#004852'};
  }
`
