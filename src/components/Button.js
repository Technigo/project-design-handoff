
import styled from 'styled-components';

export const Button = styled.button`
box-sizing:border-box;
background: #FFE600;
box-shadow: 0px 2.24635px 2.24635px rgba(0, 0, 0, 0.25);
border-radius: 50px;
width: ${(props) => props.width || '90%'};
font-size: ${(props) => props.fontSize || '16px'};
margin: 10px;
padding: 12px 24px;
box-shadow: 0px 2.24635px 2.24635px rgba(0, 0, 0, 0.25);

  @media (min-width: 1024px) {
    width: ${(props) => (props.login ? '140px' : '212px')};
    font-size: ${(props) => (props.login ? '16px' : '20px')};
  }
`;