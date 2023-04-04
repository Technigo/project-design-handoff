
import styled from 'styled-components';

export const Image = styled.img`
position:absolute;
top:50%;
max-width: 100%;
z-index:-1;

  @media (min-width: 1024px) {
    max-width:593px;
    max-height:571px;
    align-self: flex-end;
  }

`