
import styled from 'styled-components';
import herobackground from '../Assets/herobackground.jpg';

const HeaderContainer = styled.header`
width: 100%;
align-items: center;
overflow: hidden;
background-image: url( ${herobackground});
background-repeat: no-repeat;
background-size: cover;
display: flex;
flex-direction: column;
-webkit-box-pack: start;
justify-content: flex-start;
-webkit-box-align: center;
align-items: center;
gap: 15px;
height: 100%;
    @media (min-width: 1025px) {

 
 
}
`;
export default HeaderContainer;