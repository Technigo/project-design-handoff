import styled from 'styled-components';

export const ImageHero = styled.div`
    background-image: url("./images/yoga-hero.jpg");
    background-size: cover;
    width: 100%;
    height:100%;
    box-sizing: border-box;
    border-radius: 30px;
    background-position: center;
`

export const Logo = styled.img`
    object-fit: cover;
`
export const PhoneImage = styled.img`
    object-fit: cover;
    justify-self: center;
     
    @media (min-width: 668px) and (max-width: 1023px) {
       width: 325px;
       height: 625px;
    }

    @media (max-width: 668px) {
        height: 440px;
        width: 228.8px;

  }
`

export const ImageBackground = styled.div`
    background-size: cover;
    width: ${(props) => (props.medium ? '678px' : '329px')};
    height: ${(props) => (props.medium ? '672px' : '442px')};
    background-position: center;
    border-radius: 30px;
`

export const ImageBenefits1 = styled(ImageBackground)`
    background-image: url("./images/yoga-benefits1.jpg");
`

export const ImageBenefits2 = styled(ImageBackground)`
    background-image: url("./images/yoga-benefits2.jpg");
`

export const ImageBenefits3 = styled(ImageBackground)`
    background-image: url("./images/yoga-benefits3.jpg");
`

export const ImageBenefits4 = styled(ImageBackground)`
    background-image: url("./images/yoga-benefits4.jpg");
`

export const ImageWorkouts = styled(ImageBackground)`
    background-image: url("./images/workout-yoga.jpg");
    height: 100%;
    width: 100%;
`
export const ImageCommunity = styled(ImageBackground)`
    background-image: url("./images/community-yoga.jpg");
    height: 100%;
    width: 100%;
    background-position: top;
`