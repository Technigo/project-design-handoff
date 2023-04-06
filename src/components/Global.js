import styled from 'styled-components';

export const Button = styled.button`
  background: transparent;
  color: #FF8F3D;
  border: solid #FF8F3D;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: bold;
  padding: 0.3rem 1.25rem;
  cursor: pointer;
  position: absolute;
`;

export const TopRightButton = styled(Button)`
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
`;

export const BottomCenterButton = styled(Button)`
  position: absolute;
  bottom: 0.625rem;
  left: 50%;
  transform: translateX(-50%);
`;
