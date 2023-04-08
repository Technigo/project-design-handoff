import styled from 'styled-components';

export const Paragraph = styled.p`
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
color: ${(props) => props.color || 'black'};
max-width:84%;
padding:2%;
font-size: 2vh;
line-height: 1.2em;
font-weight: 500;
display:inline-block;
box-sizing: border-box;
text-shadow: 0px 3.13103px 3.13103px rgba(0, 0, 0, 0.25);
  @media (min-width: 1024px) {
      color:#ffffff;
      font-weight: 300;
      font-size:2.5vh;
  }
`;

export const ParagraphHidden = styled.p`
max-width:84%;
font-size: 1.25em;
line-height: 1.2em;
font-weight: 500;
display:'inline-block';
box-sizing: border-box;
text-shadow: 0px 3.13103px 3.13103px rgba(0, 0, 0, 0.25);
  @media (min-width: 1024px) {
      display:none;
  }
`;

export const SectionTitle = styled.h1`
font-family: 'Permanent Marker';
font-size: 40px;
border-radius: 0px 0px 100px 13px;
border-bottom: ${(props) => props.border || '5px solid #004852'};
width:90%;
background: ${(props) => props.background || '#096B78'};
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
color: ${(props) => (props.color || '#FFE600')};
font-size: 1.5em;
padding: 7px 10px;
box-shadow:${(props) => (props.shadow || '0px 4px 4px 0px #00000040')};
align-self:${(props) => props.alignSelf};
z-index: 10;
max-width:440px;
  @media (min-width: 1024px) {
      max-width:501px;
  }
   @media (min-width: 1440px) {
      position:${(props) => (props.absolute ? 'absolute' : 'relative')};
      top:${(props) => (props.absolute ? '0' : 'auto')};
  }

`

export const ListItem = styled.li`
padding:10px 15px;
font-weight: 300;
font-size: 1em;
list-style-type: circle;
display: list-item;
  `

export const CardTitle = styled.h2`
color: #002A30;
font-family: 'Permanent Marker';
font-weight: 400;
font-size: 1.2em;
padding:10px;
`

export const CardSubTitle = styled.h3`
color: #002A30;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
color: ${(props) => props.color || 'black'};
font-weight: 600;
font-size: 1.2em;
padding:10px;
line-height:20px;
align-self: flex-start;
`

export const CardText = styled.p`
font-weight: 300;
font-size:1em;
color:${(props) => props.color || '#27363D'};
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
color: ${(props) => props.color || 'black'};
width:${(props) => props.width};
padding:20px;
background:${(props) => props.background};
border-radius: 23px 23px 0px 23px;
align-self:${(props) => props.alignSelf};
z-index:1;
line-height: 113.5%;
a{
  color:rgb(39, 54, 61);
}
  @media (min-width: 1024px) {
      font-size:1.25em;
  }
`

export const Input = styled.input`
width: 261px;
height: ${(props) => props.height || '44px'};
background: #FFFFFF;
border: 1.5px solid #CBD5E1;
border-radius: 4px;
font-family: 'Public Sans', sans-serif;
color: #070A13;
z-index:1;
`

export const Label = styled.label`
font-family: 'Public Sans', sans-serif;
color: #070A13;
padding: 7px;
z-index:1;
`
