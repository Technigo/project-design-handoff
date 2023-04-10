import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  position: absolute;
  top:0;
  left:0;
  width: 100%;
  box-sizing: border-box;
  padding: 49px 96px;
  justify-content: space-between;

  @media (min-width: 668px) and (max-width: 1023px) {
    padding: 42px 42px;
  }

  @media (max-width: 768px) {
    padding: 43px 32px;
  }
`

export const NavWhite = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background: #FFFFFF;
  border-radius: 100px;
  width: 380px;
  height: 40px;
  padding-right:12px;
`

export const NavBlack = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  border-radius: 100px;
  width: 380px;
  height: 40px;
  padding-right:12px;
  background: #222322;
  position: fixed;
  bottom: 32px;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 999;

  @media (max-width: 768px) {
    width: 320px;
    padding-right: 18px;
  }
`

export const NavLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  font-size: 14px;
  font-weight: 700;
  color: ${(props) => (props.whitenav ? '#222322' : '#FFFFFF')};
  text-decoration: none;
  margin:0;
  padding:0;
  width: ${(props) => (props.width || '')};
  text-align: center;
  
  &:hover {
    font-size: 13px;
  }
`

