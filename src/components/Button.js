
import styled from 'styled-components';

const Button = styled.button` 
   padding: 15px 7px 13px 6px;
    text-align: center;
    font-size: 17px;
    font-family: 'Calibri';
    box-shadow: 0px 2.24635px 2.24635px rgba(0, 0, 0, 0.25);
   border-radius: 50px;
    margin: 15px 38px 25px 25px;
    cursor: pointer;
    border-radius: 50%;
    background-color: rgb(255, 230, 0);

   &:hover {
    background-color: grey;
}
 @media (min-width: 1025px) {
    width: 300px;
 padding: 30px;

}
`;

export default Button