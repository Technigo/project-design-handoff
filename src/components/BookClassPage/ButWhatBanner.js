import React from 'react';
import styled from 'styled-components';
import ButWhatBannerImg from '../../assets/Whats-acrobatics-banner.svg'

const ButWhatBannerHolder = styled.img`
width: 80.5%;
margin-top: 42.5px;
`
const BWBWrapper = styled.div`
display: flex;`

export const ButWhatBanner = () => {
  return (
    <BWBWrapper>
      <ButWhatBannerHolder src={`${ButWhatBannerImg}`} />
    </BWBWrapper>
  )
}