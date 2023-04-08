
import styled from 'styled-components';

export const Button = styled.button`
box-sizing:border-box;
background: #FFE600;
box-shadow: 0px 2.24635px 2.24635px rgba(0, 0, 0, 0.25);
border-radius: 50px;
width: ${(props) => props.width || '90%'};
min-width:max-content;
font-size: ${(props) => props.fontSize || '1rem'};
margin: 0.625rem;
padding: 0.8em 1.5em;
box-shadow: 0px 2.24635px 2.24635px rgba(0, 0, 0, 0.25);

&:active{
background: #AEA600;
}

  @media (min-width: 1024px) {
    width: ${(props) => (props.login ? '8.75em' : 'max-content')};
    font-size: 1.6em;
  }
`;
