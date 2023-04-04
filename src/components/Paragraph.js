import styled from 'styled-components';

export const Paragraph = styled.p`
max-width:360px;
padding:0 24px;
font-size: 16px;
font-weight: 600;
line-height: 24px;
letter-spacing: -0.022em;
display:${(props) => (props.mobile ? 'inline-block' : 'none')};
box-sizing: border-box;

  @media (min-width: 1024px) {
      display:${(props) => (props.mobile ? 'none' : 'block')}
  }
`;