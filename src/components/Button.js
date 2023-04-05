import styled from 'styled-components';

const Button = styled.button`
  background: transparent;
  color: #FF8F3D;
  border: solid #FF8F3D;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: bold;
  padding: 0.3rem 1.25rem;
  cursor: pointer;
  position: absolute;
`
export const TopRightButton = styled(Button)`
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const BottomCenterButton = styled(Button)`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
`;

export default Button;