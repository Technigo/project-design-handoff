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
}
`;

export const Title = styled.h1`
width:328px;
font-family: 'Permanent Marker', cursive;
color:#ffffff;
font-size: 48px;
font-weight: bold;

@media (min-width: 1024px) {
    font-size: 112px;
    width: 786px;
}
`;

export const SecondaryTitle = styled.h2`
width:328px;
padding:0 24px;
font-size: 24px;
font-weight: 600;
line-height: 27px;
letter-spacing: -0.022em;
color:#FFE600;
display:${(props) => (props.mobile ? 'flex' : 'none')};
box-sizing: border-box;
text-shadow: 0px 3.13103px 3.13103px rgba(0, 0, 0, 0.25);

  @media (min-width: 1024px) {
    flex-direction: column;
      display:${(props) => (props.mobile ? 'none' : 'inline-block')};
      width: 583px;
      font-size: 32px;
      font-weight: 300;
      color:#ffffff;
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
display:${(props) => (props.mobile ? 'inline-block' : 'none')};
width:100%;

  @media (min-width: 1024px) {
    display:${(props) => (props.mobile ? 'none' : 'flex')};
    flex-direction: column;
    justify-content: flex-start;
    gap:30px;
  }

`;

