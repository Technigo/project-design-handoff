
import styled from 'styled-components';

export const Image = styled.img`
position:absolute;
top:${(props) => props.top};
max-width: ${(props) => props.width};
max-height:  ${(props) => props.height};
z-index:-1;
`