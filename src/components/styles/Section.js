import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  padding: 32px;
  box-sizing: border-box;

  @media (min-width: 768px) and (max-width: 1440px) {
    height: ${(props) => (props.height || '100vh')};
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    height: ${(props) => (props.height || '100vh')};
    padding: 24px;
  }

  @media (max-width: 768px) {
    height: ${(props) => (props.height || '100vh')};
    padding: 16px;
  }
`

export const HeroContainer = styled.div`
  position: absolute;
  left: 152px;
  top: 200px;
  display: flex;
  flex-direction: column;
  gap: 70px;

  @media (min-width: 668px) and (max-width: 1023px) {
    left: 128px;
  }

  @media (max-width: 668px) {
    left: 40px;
    top: 150px;
    gap: 40px;
  }
`
export const OuterContainer = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`
export const InnerContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  gap: ${(props) => (props.gap || '20px')};
  margin: ${(props) => (props.margin || '')};
  flex-direction: ${(props) => (props.flexcolumn ? 'column' : '')};
  grid-template-rows: ${(props) => (props.gridrow || '')};
  display: ${(props) => (props.grid ? 'grid' : 'flex')};
  max-width: ${(props) => (props.maxwidth || '')};
  justify-self: ${(props) => (props.justifyself || '')};
  align-self: ${(props) => (props.center ? 'center' : '')};
  padding: ${(props) => (props.padding || '')};
  margin: ${(props) => (props.margin || '')};

  ${(props) => props.hero && css`
    flex-direction: column;
  `}

  ${(props) => props.benefits && css`
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(4,1fr);

    @media (min-width: 768px) and (max-width: 1023px) {
      grid-template-columns: repeat(2,1fr);
      grid-template-rows: repeat(2,1fr);
    }

    @media (max-width: 768px) {
      grid-template-columns: repeat(1,1fr);
      grid-template-rows: repeat(4,1fr);
    }
  `}
    
  ${(props) => props.workouts && css`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-template-rows: 652.281px;
    margin-top: 20px;

    @media (min-width: 668px) and (max-width: 1023px) {
      display: flex;
      flex-wrap: wrap;
    }

    @media (max-width: 668px) {
      display: flex;
      flex-wrap: wrap;
    }
  `}

    ${(props) => props.activity && css`
      grid-template-columns: repeat(3,1fr);
      flex-wrap: no-wrap;
      margin-top: 20px;

    @media (min-width: 668px) and (max-width: 1023px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    @media (max-width: 668px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  `}

  ${(props) => props.community && css`
    grid-template-columns: repeat(2,1fr);
    grid-template-rows: 600px;
    gap: 20px;
    margin-top: 30px;

  @media (min-width: 768px) and (max-width: 1023px) {
    grid-template-columns: repeat(1,1fr);
    grid-template-rows: 60vh;
    gap: 40px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1,1fr);
    grid-template-rows: 736px;
    gap: 40px;
  }
  `}
`
export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-sizing: border-box;

  ${(props) => props.activitycontainer1 && css`
    max-width: 287px;
    align-self: center;
    justify-self: flex-end;
    gap:58px;
  `}

    ${(props) => props.activitycontainer2 && css`
    justify-self: flex-start;
    max-width: 287px;
    align-self: center;
    gap:58px;
  `}

  ${(props) => props.formcontainer && css`
    padding: 0 44px;
    align-items: flex-start;

    @media (max-width: 768px) {
    padding: 0 32px;
    }
  `}
`

export const HeaderDiv = styled.div`
  display:contents;
  
  @media (min-width: 668px) and (max-width: 1023px) {
    display:contents;
  }

  @media (max-width: 668px) {
    display: none;
  }
`

export const InnerCardsContainer = styled.div`
  display: flex;
  gap: 20px;
  gap: 20px;
  box-sizing: border-box;
   
  @media (max-width: 668px) {
    flex-direction: column;
  }
`

export const TextOnImageContainer = styled(InnerContainer)`
  position: absolute;
  left: 0;
  bottom: 0;
  padding: ${(props) => (props.workoutstext ? '40px' : '20px')};
  gap: 8px;
  justify-content: ${(props) => (props.workoutstext ? 'space-between' : '')};
  
  @media (max-width: 768px) {
    max-width: ${(props) => (props.maxwidth ? '70%' : '')};
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 40px;
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.flexcolumn ? 'column' : '')};
  gap: ${(props) => (props.gap || '20px')};
  max-width: ${(props) => (props.maxwidth ? '328px' : '')};
  overflow-wrap: break-word;

  @media (max-width: 768px) {
    max-width: ${(props) => (props.maxwidth ? '70%' : '')};
  }
`

export const TextBlock = styled(TextContainer)`
  box-sizing: border-box;
  background-color: ${(props) => (props.grey && '#EFEFEF')};
  background-color: ${(props) => (props.purple && '#DCD2F1')};
  background-color: ${(props) => (props.green && '#CAD7BA')};
  padding: 40px;
  border-radius: 30px;
  gap: ${(props) => (props.large ? '40px' : '8px')};
  width: ${(props) => (props.half && '50%')};
  align-items: stretch; 
  height: ${(props) => (props.grey ? '70%' : '100%')};

  @media (min-width: 768px) and (max-width: 1223px) {
    gap: ${(props) => (props.large ? '20px' : '8px')};
  }

  @media (max-width: 768px) {
    width: ${(props) => (props.workoutscolumn ? '100%' : '')};
    gap: ${(props) => (props.large ? '51px' : '8px')};
  }
            
`
export const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const IconContainer = styled.div`
  display: flex;
  gap: 44px;
  align-items: center;

  @media (max-width: 768px) {
    gap:8px;
  }
`

export const ImgContainer = styled.div`
  height: ${(props) => (props.height || '100%')};
  height: ${(props) => (props.position || '')};

  @media (min-width: 768px) and (max-width: 1023px) {
    height: ${(props) => (props.workoutsbox ? '672px' : '726px')};
    width: ${(props) => (props.workoutsbox ? '100%' : '')};
    width: 100%;
    background-size: cover;
    background-position: top;
    border-radius: 30px;
  }

  @media (max-width: 768px) {
    height: ${(props) => (props.workoutsbox ? '672px' : '')};
    width: ${(props) => (props.workoutsbox ? '100%' : '')};
  }
`

export const ImgCardSmall = styled.div`
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: top;
  border-radius: 30px;
  position: relative;
  height: 442px;
  
  @media (min-width: 768px) and (max-width: 1023px) {
      height: 504px;
  }

  @media (max-width: 768px) {
      height: 100vh;
  }
`

export const ImgCardLarge = styled.div`
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: top;
  border-radius: 30px;
  position: ${(props) => (props.relative ? 'relative' : '')};
  
  @media (min-width: 768px) and (max-width: 1023px) {
    height: 672px;
  }

  @media (max-width: 768px) {
    height: 736px;
  }
`