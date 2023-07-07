import React from 'react';
import styled from 'styled-components';
import { Paragraph } from '../Components/Fonts';
import AddressPhoto from '../Assets/Photos/addressphoto.jpg';

const AddressDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
margin-top: 30px;
margin-left: 16px;
margin-right: 16px;
margin-bottom: 30px;

@media (min-width: 1024px) {
    margin: 80px;
}`

const AddressTextDiv = styled.div`
width: 259px;
height: 192px;
background: #8c78af;
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
        <Paragraph>Find us at:<br />
        Fridhemsplansgatan No. 10<br />
        Stockholm, Sweden
        </Paragraph>
      </AddressTextDiv>
    </AddressDiv>
  )
}