import React from 'react';
import styled from 'styled-components';
import RingAcrobatimg from '../../assets/RingAcrobat.svg'
import Acrostripe1img from '../../assets/Acrostripe1.svg'
import Acrostripe2img from '../../assets/Acrostripe2.svg'
import Acrostripe3img from '../../assets/Acrostripe3.svg'
import Acrostripe4img from '../../assets/Acrostripe4.svg'

const AcroArtWrapper = styled.div`
position: relative;
`

const RingAcrobat = styled.img`
position: absolute;
width: 372.1px;
height: 369.21px;
z-index: 1;
left: 20px;
`

const Acrostripe1 = styled.img`
position: absolute;
width: 288.15px;
height: 264.4px;
left: 225.54px;
top: 12.5px;
`

const Acrostripe2 = styled.img`
position: absolute;
width: 329.42px;
height: 305.86px;
left: 142.98px;
top: 12.5px;
`

const Acrostripe3 = styled.img`
position: absolute;
width: 367.11px;
height: 347.38px;
left: 64px;
top: 12.5px;
z-index: 2;
`

const Acrostripe4 = styled.img`
position: absolute;
width: 199.26px;
height: 199.26px;
left: 192.56px;
top: 201.5px;
`

export const RingAcroArt = () => {
  return (
    <AcroArtWrapper>
      <RingAcrobat src={`${RingAcrobatimg}`} />
      <Acrostripe1 src={`${Acrostripe1img}`} />
      <Acrostripe2 src={`${Acrostripe2img}`} />
      <Acrostripe3 src={`${Acrostripe3img}`} />
      <Acrostripe4 src={`${Acrostripe4img}`} />
    </AcroArtWrapper>
  )
}