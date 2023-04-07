/* eslint-disable linebreak-style */
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 95%;
  max-width: 445px;
  height: 192px;
  margin: 16px auto 16px auto;
  display: flex;
  align-items: stretch;

  @media (min-width: 545px) {
    margin: 26px auto 20px auto;
  }

  @media (min-width: 685px) {
    width: 680px;
    max-width: 680px;
    height: 326px;
    margin: 46px auto 50px auto;
  }
`

const Image = styled.img`
  width: 185px;
  height: 192px;
  object-fit: cover;

  @media (min-width: 685px) {
    height: 100%;
    width: 314px;
  }
`

const FindUsWrapper = styled.div`
  height: 100%;
  background-color: #66A1AE;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 2;

  @media (min-width: 685px) {
    width: 365px;
  }
`

const FindUs = styled.p`
  color: white; 
  font-family: 'Outfit', sans-serif;
  font-weight: 600;
  width: 90%;
  font-size: 16px;

  @media (min-width: 685px) {
    font-size: 24px;
  }
`

export const Location = () => {
  return (
    <Wrapper>
      <Image src="./images/location.png" />
      <FindUsWrapper>
        <FindUs>Find us at: <br />Fredhemsplansgatal No. 10<br />Stockholm, Swedem</FindUs>
      </FindUsWrapper>
    </Wrapper>
  )
}
