import React from 'react';
import ButWhatBannerImg from '../../assets/Whats-acrobatics-banner.svg'
import { ButWhatBannerHolder, BWBWrapper } from './BookClassPageCSS'

export const ButWhatBanner = () => {
  return (
    <BWBWrapper>
      <ButWhatBannerHolder src={`${ButWhatBannerImg}`} />
    </BWBWrapper>
  )
}