import React from 'react';
import styled from 'styled-components';
import ButWhatBannerImg from '../../assets/Whats-acrobatics-banner.svg'

const ButWhatBannerHolder = styled.img`
width: 80.5%;
margin-top: 42.5px;
`

export const ButWhatBanner = () => {
  return (
    <ButWhatBannerHolder src={`${ButWhatBannerImg}`} />
  )
}