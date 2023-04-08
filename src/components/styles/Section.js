import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100vh;
    padding: 32px;
    box-sizing: border-box;
    position: ${(props) => (props.relative ? 'relative' : '')};

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

export const OuterContainer = styled.div`
    position: ${(props) => (props.absolute ? 'absolute' : '')};
    left: ${(props) => (props.hero ? '152px' : '0')};
    top: ${(props) => (props.hero ? '200px' : '0')};
    display: flex;
    flex-direction: ${(props) => (props.flexcolumn ? 'column' : '')};
    gap: ${(props) => (props.gap || '20px')};

    @media (min-width: 668px) and (max-width: 1023px) {
        left: ${(props) => (props.hero ? '128px' : '0')};
    }

    @media (max-width: 768px) {
        left: ${(props) => (props.hero ? '40px' : '0')};
  }
`

export const InnerContainer = styled.div`
    display: ${(props) => (props.grid ? 'grid' : 'flex')};
    grid-template-columns: ${(props) => (props.columns || 'repeat(2,1fr)')};
    grid-template-rows: ${(props) => (props.gridrow || '')};
    flex-direction: ${(props) => (props.flexcolumn ? 'column' : '')};
    gap: ${(props) => (props.gap || '20px')};
    align-items: ${(props) => (props.alignscenter ? 'center' : 'flex-start')};
    justify-content: ${(props) => (props.justifycenter ? 'center' : 'flex-start')};
    width: 100%;
    flex-wrap: ${(props) => (props.wrap ? 'wrap' : '')};
    box-sizing: border-box;
    align-content: ${(props) => (props.workoutsbox && 'stretch')};
    max-width: ${(props) => (props.maxwidth || '')};
    justify-self: ${(props) => (props.justifyself || '')};
    align-self: ${(props) => (props.center ? 'center' : '')};
    padding: ${(props) => (props.padding || '')};
    margin: ${(props) => (props.margin || '')};

        
    @media (min-width: 668px) and (max-width: 1023px) {
       display:  ${(props) => (props.workoutsbox ? 'flex' : '')};
       grid-template-columns: ${(props) => (props.benefitsgrid ? 'repeat(2,1fr)' : '')};
       grid-template-rows: ${(props) => (props.benefitsgrid ? 'repeat(2,1fr)' : '')};

    }

    @media (max-width: 768px) {
        display:  ${(props) => (props.workoutsbox ? 'flex' : '')};
        grid-template-columns: ${(props) => (props.benefitsgrid ? 'repeat(1,1fr)' : '')};
       grid-template-rows: ${(props) => (props.benefitsgrid ? 'repeat(4,1fr)' : '')};
       flex-direction: ${(props) => (props.workoutscolumn ? 'column' : '')};
  }
`

export const TextOnImageContainer = styled(InnerContainer)`
    position: absolute;
    left: 0;
    bottom: 0;
    padding: 20px;
    gap: 8px;
    justify-content: ${(props) => (props.workoutstext ? 'space-between' : '')};
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: ${(props) => (props.flexcolumn ? 'column' : '')};
    gap: ${(props) => (props.gap || '20px')};
    max-width: ${(props) => (props.maxwidth ? '328px' : '')};
    overflow-wrap: break-word;
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
        height: 100vh;
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
        height: 100vh;
    }

    @media (max-width: 768px) {
        height: 100vh;
  }
`

export const GradientContainer = styled.div`
    border-radius: 30px;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
`

export const Gradient1 = styled(GradientContainer)`
    background: linear-gradient(10.68deg, #DCBAF9 17.69%, rgba(255, 255, 255, 0) 60.42%);
`

export const Gradient2 = styled(GradientContainer)`
    background: linear-gradient(18.32deg, #F4DDAB 17.32%, rgba(255, 255, 255, 0) 64.81%);
`

export const Gradient3 = styled(GradientContainer)`
    background: linear-gradient(13.26deg, #ABD1F4 17.53%, rgba(255, 255, 255, 0) 51.7%);
`

export const Gradient4 = styled(GradientContainer)`
    background: linear-gradient(20.79deg, #CAD7BA 19.92%, rgba(255, 255, 255, 0) 56%);
`

export const Gradient5 = styled(GradientContainer)`
    background: linear-gradient(6.08deg, #DCD2F1 7.04%, rgba(255, 255, 255, 0) 50.17%);
`