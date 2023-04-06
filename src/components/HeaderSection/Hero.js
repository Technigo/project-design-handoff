import styled from 'styled-components';

export const Hero = styled.section`
position:realitive;
display: flex;
flex-direction:column;
justify-content: flex-start;
align-items:center;
gap: 15px;
height:100%;
@media (min-width: 1024px) {
margin:0 11%;
align-items:flex-start;
gap:82px;
margin:6% 0;
@media (min-width: 1024px) {
margin:6% 11.6% 0;
}

}
`;

export const Title = styled.h1`
width:87%;
font-family: 'Permanent Marker', cursive;
color:#ffffff;
font-size: 8vh;
font-weight: bold;

@media (min-width: 1024px) {
   font-size: 5.6em;
}
`;

export const SecondaryTitle = styled.h2`
padding: 2% 0;
width: 80%;
font-size: 4vh;
font-weight: 600;
color:#FFE600;
display:none;
box-sizing: border-box;
text-shadow: 0px 3.13103px 3.13103px rgba(0, 0, 0, 0.25);

  @media (min-width: 1024px) {
    flex-direction: column;
      display:inline-block;
      font-weight: 300;
      color:#ffffff;
  }
`;

export const SecondaryTitleHidden = styled.h2`
padding: 2% 0;
width: 80%;
font-size: 4vh;
font-weight: 600;
color:#FFE600;
display:flex;
box-sizing: border-box;
text-shadow: 0px 3.13103px 3.13103px rgba(0, 0, 0, 0.25);

  @media (min-width: 1024px) {
      display:none;
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

export const ParagraphContainer = styled.div`
display:none;
width:100%;

  @media (min-width: 1024px) {
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    /* gap:30px; */
  }

`;

