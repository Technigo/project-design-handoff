
import styled from 'styled-components';

export const Image = styled.img`
position:absolute;
bottom: 0;
max-width: 100%;
z-index:-1;

  @media (min-width: 1024px) {
    max-width:593px;
    max-height: 50%;
    align-self: flex-end;
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