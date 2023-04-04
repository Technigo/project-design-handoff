import styled from 'styled-components';

export const Hero = styled.section`
display: flex;
flex-direction:column;
justify-content: flex-start;
align-items:center;
gap: 15px;
height:100%;
`;

export const Title = styled.h1`
width:328px;
font-family: 'Permanent Marker', cursive;
color:#ffffff;
font-size: 48px;
font-weight: bold;
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

  @media (min-width: 1024px) {
    flex-direction: column;
      display:${(props) => (props.mobile ? 'none' : 'flex')}
  }
`;

