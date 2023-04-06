import styled from 'styled-components';

export const Paragraph = styled.p`
max-width:84%;
font-size: 2vh;
line-height: 1.2em;
font-weight: 500;
display:inline-block;
box-sizing: border-box;
text-shadow: 0px 3.13103px 3.13103px rgba(0, 0, 0, 0.25);
  @media (min-width: 1024px) {
      color:#ffffff;
      font-weight: 300;
      font-size:3vh;
  }
`;

export const ParagraphHidden = styled.p`
max-width:84%;
font-size: 2vh;
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
font-family: Permanent Marker;
font-size: 40px;
border-bottom: 5px solid #19737F;
border-radius: 0px 0px 100px 13px;
border-bottom: 5px solid #004852;
background: #096B78;
width:90%;
background: ${(props) => props.background};
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
color: ${(props) => props.color || '#FFE600'};
font-size: 1.5em;
padding: 7px 10px;
box-shadow: 0px 4px 4px 0px #00000040;
`

export const ListItem = styled.li`
padding: 10px 0;
font-weight: 300;
font-size: 2vh;
list-style-type: circle;
display: list-item;
  `