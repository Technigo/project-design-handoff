import React from 'react';
import styled from 'styled-components';
import { WhiteParagraph } from '../Components/Fonts';
import AddressPhoto from '../Assets/Photos/addressphoto.jpg';

const AddressDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
margin-top: 16px;
margin-left: 16px;
margin-right: 16px;
margin-bottom: 16px;

@media (min-width: 1024px) {
    margin: 50px;
}`

const AddressTextDiv = styled.div`
width: 259px;
height: 192px;
background-color: #46A1AE;
display: flex;
align-items: center;
padding-left: 7px;

@media (min-width: 1024px) {
    padding-left: 24px;
    width: 365px;
    height: 326px;
}`

const AddressImg = styled.img`
height: 192px;
width: 185px;

@media (min-width: 1024px) {
    width: 314px;
    height: 326px;
}`

export const Address = () => {
  return (
    <AddressDiv>
      <AddressImg src={AddressPhoto} alt="Sunny house in stockholm" />
      <AddressTextDiv>
        <WhiteParagraph>Find us at:<br />
        Fridhemsplansgatan No. 10<br />
        Stockholm, Sweden
        </WhiteParagraph>
      </AddressTextDiv>
    </AddressDiv>
  )
}