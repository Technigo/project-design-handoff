
import styled from 'styled-components';

export const Highlight = styled.span`
color:${(props) => (props.cta ? '#FFE600' : '#F7FEFF')};
color:${(props) => (props.color)};
font-weight:600;
`