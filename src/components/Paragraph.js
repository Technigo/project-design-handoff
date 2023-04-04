import styled from 'styled-components';

export const Paragraph = styled.p`
max-width:360px;
padding:0 24px;
font-size: 16px;
font-weight: 500;
line-height: 24px;
letter-spacing: -0.022em;
display:${(props) => (props.mobile ? 'inline-block' : 'none')};
box-sizing: border-box;
text-shadow: 0px 3.13103px 3.13103px rgba(0, 0, 0, 0.25);

  @media (min-width: 1024px) {
      display:${(props) => (props.mobile ? 'none' : 'block')};
      width: 403px;
      font-size: 24px;
      color:#ffffff;
      font-weight: 300;
  }
`;