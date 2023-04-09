
import styled from 'styled-components';

export const Button = styled.button` 
   padding: 12px 24px;
    font-size: 17px;
    font-family: 'Calibri';
    box-shadow: 0px 2.24635px 2.24635px rgba(0, 0, 0, 0.25);
 border-radius: 50px;
width: ${(props) => props.login || '90%'};
font-size: ${(props) => props.fontSize || '16px'};
    margin: 10px;
    cursor: pointer;
 background-color: rgb(255, 230, 0);


   &:hover {
    background-color: grey;
}
 @media (min-width: 1024px) {
 
    width: ${(props) => (props.login ? '10%' : '212px')};
    font-size: ${(props) => (props.login ? '16px' : '20px')};
  }
`;

export const ButtonContainer = styled.div`
display: flex;
flex-direction:column;
justify-content: center;
align-items:center;
width:100%;
margin: 50px 0;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: flex-start;
    margin: 0;
  }
`;
