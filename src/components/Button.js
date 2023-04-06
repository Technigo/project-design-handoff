
import styled from 'styled-components';

const Button = styled.button` 
   padding: 15px 7px 13px 6px;
    text-align: center;
    font-size: 17px;
    font-family: 'Calibri';
    box-shadow: 0px 2.24635px 2.24635px rgba(0, 0, 0, 0.25);
   border-radius: 30px;
    margin-top: 0px;
    cursor: pointer;
  width: 90px;
 background-color: rgb(255, 230, 0);


   &:hover {
    background-color: grey;
}
 @media (min-width: 1025px) {
    width: 200px;
  padding: 5px 50px 5px 50px;
 font-size: 24px;
 text-align: center;

}
`;

export default Button