import React from 'react'
import styled from 'styled-components'

export const HeroSection = () => {
  // const [image, setImage] = useState('#')

  // useEffect(() => {
  //   // Fetch data maybe from API maybe, update with state
  // }, []);

  return (
    <HeroContainer>
      {/* <HeroImage src={image} /> */}
      <HeroText>
        <h1>Here comes text</h1>
        <p>Here comes info maybe</p>
        <HeroButton>Click</HeroButton>
      </HeroText>
    </HeroContainer>
  )
}
export default HeroSection;

const HeroContainer = styled.div`
display: flex;
border: 1px solid yellow;
`

const HeroText = styled.div`
text-align: center;
z-index: 1;
`

const HeroButton = styled.button`
padding: 10px 20px;
border: none;
border-radius: 5px;
cursor: pointer;
`
// const HeroImage = styled.image`
// width: 50%;
// height: 50%;
// position: absolute;
// top: 0;
// left: 0;
// object-fit: cover;
// `
