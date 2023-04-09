import styled from 'styled-components';

export const FooterWrapper = styled.div`
background: #42403C;
height: 100vh;
`

export const StripesWrapper = styled.div`
position: relative;
height: 17.6%;
width: 75%;
padding-top: 12.5px;
max-width: 445px;
max-height: 445px;
`

export const StripesBottom = styled.img`
width: 81vw;
max-width: 712px;
right: 14%;
position: absolute;
max-width: 712px;
max-height: 712px;

@media (min-width: 1024px) {
    width: 48vw;
    right: 15%;
}`

export const FooterChildWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 81.5%;
justify-content: space-between;

@media (min-width: 1024px) {
    justify-content: flex-end;
    flex-direction: row;
    align-items: baseline;
}
`

export const LogoAg = styled.img`
width: 45%;
max-width: 216px;

@media (min-width: 1024px) {
    width: 86%;
    max-width: 254px;
}
`

export const Contact = styled.div`
display: flex;
flex-direction: column;
height: 61px;

@media (min-width: 1024px) {
    height: 98px;
}
`

export const ContactUs = styled.p`
font-family: 'Kulim Park';
font-style: normal;
font-weight: 400;
font-size: 25.3306px;
text-align: center;
letter-spacing: -0.022em;
color: #B9F615;
font-size: 16px;
margin: 0;

@media (min-width: 1024px) {
    font-size: 25.6px;
}
`

export const MailUs = styled.a`
font-family: 'Kulim Park';
font-style: normal;
font-weight: 400;
font-size: 25.3306px;
text-align: center;
letter-spacing: -0.022em;
color: white;
font-size: 16px;
margin: 0;

@media (min-width: 1024px) {
    font-size: 25.6px;
}
`

export const CallUs = styled.a`
font-family: 'Kulim Park';
font-style: normal;
font-weight: 400;
text-align: center;
letter-spacing: -0.022em;
color: white;
font-size: 16px;
margin: 0;

@media (min-width: 1024px) {
    font-size: 25.6px;
}
`

export const SocialMediaWrapper = styled.div`
display: flex;
width: 192px;
justify-content: space-between;

@media (min-width: 1024px) {
    scale: 1.2;
}
`

export const Instagram = styled.img`
width: 32px;
`

export const Facebook = styled.img`
width: 32px;`

export const Twitter = styled.img`
width: 32px;`

export const CollabWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 334px;

@media (min-width: 1024px) {
    height: 100%;
    width: 37%;
}
`

export const BrandWrapper = styled.div`
display: flex;
justify-content: center;
height: 15%;
margin-bottom: 6%;

@media (min-width: 1024px) {
    scale: 0.9;
}
`

export const BrandLogo = styled.img`
scale: 0.9;
filter: invert(1);
`

export const PoweradeLogo = styled.img`
scale: 1;

@media (min-width: 1024px) {
    scale: 2;
}
`

export const LogoContactMediaWrapper = styled.div`
display: flex;
    flex-direction: column;
    align-items: center;
    height: 47%;
    justify-content: space-around;
    
    @media (min-width: 800px) {
        scale: 1.2;
    }

    @media (min-width: 1024px) {
        scale: 1;
        height: 90%;
        justify-content: space-between
    }
    `