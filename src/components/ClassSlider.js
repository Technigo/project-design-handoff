/* eslint-disable linebreak-style */
import React from 'react'
import styled from 'styled-components'
import PowerYoga60 from './images/poweryoga60.png'

const ClassImage = styled.img`
  width: 200px;
  height: 200px;
`

export const ClassSlider = () => {
  return (
    <div>
      <p>Hellllooooo</p>
      <ClassImage src={PowerYoga60} />
    </div>
  )
}