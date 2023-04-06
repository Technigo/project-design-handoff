import styled from 'styled-components';

export const HeroContainer = styled.div`
width: 60%;
    margin: auto;
    background-color: rgba(149, 166, 181, 0.6);
    border-radius: 8px 80px;
    height: 60%;
    padding: 40px;
    color: white;
`;

export const HeroMainText = styled.div`
    display: flex;  
    flex-direction: column;
    gap: 15px;
`;

export const ButtonsContainer = styled.div`
display: flex;
    gap: 15px;
    justify-content: left;
`;

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