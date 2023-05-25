import styled from 'styled-components';

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
width: ${(props) => (props.bigWrapper ? '80%' : '75%')};
justify-content: ${(props) => (props.center ? 'center' : 'flex-start')};
`;

