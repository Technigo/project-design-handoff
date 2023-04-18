import styled from 'styled-components';
import BackgroundImg from '../../assets/images/header-bg-yogadog.png';
// import HeroImg from '../assets/images/header-bg-yogadog.png';
/* this was moved from HeroContainer below because I didn't get it
to work right now: background-image: url(${HeroImg}); */

export const HeroContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-image: url(${BackgroundImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    color: white;
`;

export const HeroTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: #32495d7f;
    opacity: 0.95;
    border-radius: 8px 160px;
    padding: 5rem;
    max-width: 27rem;

   
`;

export const HeroMainText = styled.div`
    display: flex;  
    flex-direction: column;
    color: white;
    justify-content: center;
`;
export const Text = styled.p`

padding-top: 1.5rem;
padding-bottom: 3rem;


`

export const ButtonsContainer = styled.div`
    display: flex;
    gap: 15px;
    justify-content: left;
`;

export const PlayButtonContainer = styled.div`
   top: 90%;
   left: 75%;
   position: absolute;
`;

// transform:translateY(580%) translateX(800%);
// right: auto;

// This below is still to fix into styled component //
// And to be put somewhere between HeroMainText and ButtonsCont //
//     font-weight: 700;
//     font-size: 40px;
//     line-height: 36px;
//     color: white;
//     font-style: italic;
// }

// .main-text p {
//     color: white;
//     margin-bottom: 13px;
//     font-style: italic;
// }