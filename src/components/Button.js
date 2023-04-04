
import styled from 'styled-components';

export const Button = styled.button`
box-sizing:border-box;
  background: #FFE600;
  box-shadow: 0px 2.24635px 2.24635px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  width: ${(props) => props.width || '90%'};
  height:  ${(props) => props.height};
  font-size: ${(props) => props.fontSize || '1rem'};
  margin: 10px;
`;