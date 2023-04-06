
import styled from 'styled-components';
import herobackground from '../Assets/herobackground.jpg';

const HeaderContainer = styled.header`
width: 100%;


display: block;
  justify-content: space-between;
  align-items: center;
overflow: hidden;
  background-image: url( ${herobackground});
  background-repeat: no-repeat;
  background-size: cover;
    @media (min-width: 1025px) {
 padding: 10vw;
 display: flex;
 width: 100%;
}
`;
export default HeaderContainer;