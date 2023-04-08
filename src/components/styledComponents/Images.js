
import styled from 'styled-components';

export const Image = styled.img`
position:absolute;
bottom: 0;
max-width: 100%;
z-index:-1;

  @media (min-width: 1024px) {
  height:${(props) => (props.review ? '120%' : '571px')};
  left:${(props) => (props.review ? '800px' : 'calc(50% - 593px/2 + 200.5px)')} ;
    bottom:${(props) => (props.review ? '-10%' : '0')};
  }
`

export const ImagePlank = styled.img`
display:none;
  @media (min-width: 1024px) {
    display:block;
    position:absolute;
    z-index:-1;
    height: 200px;
    bottom: -210px;
    right: 10%;
  }

`

export const Icon = styled.a`
svg{
width:2.9em;
height:2.9em;
fill:#FFE600;
}
  @media (min-width: 1024px) {

  }
`
