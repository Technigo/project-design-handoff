
import styled from 'styled-components';

export const FlexContainer = styled.div`
box-sizing: border-box;
height:${(props) => props.height || '100%'};
min-height:${(props) => (props.main ? '100vh' : '')};
width:${(props) => props.width || '100%'};
max-width:${(props) => props.maxWidth || '100%'};
display:${(props) => (props.visible ? 'none' : 'flex')};
flex-direction:${(props) => props.flexDirection || 'column'};
justify-content: ${(props) => props.justifyContent || 'flex-start'};
position:relative;
align-items:${(props) => props.alignItems || 'center'};
background:${(props) => props.background};
border:${(props) => props.border || ''};
border-radius:${(props) => props.borderRadius || 'none'};
padding:${(props) => props.padding || '0px 8px 8px 8px'};
gap:${(props) => props.gap || '0px'};
z-index:${(props) => props.zIndex || '0'};
border-color:${(props) => props.borderColor || ''};

  @media (min-width: 1024px) {
    align-self:${(props) => (props.review ? 'flex-start' : 'center')};
    margin-bottom:${(props) => (props.plankPositioning ? '200px' : '0')}
  }

  @media (min-width: 1440px) {
    align-self:${(props) => (props.review ? 'flex-start' : 'center')};
    margin-bottom:${(props) => (props.plankPositioning ? '50px' : '0')};
    margin-top:${(props) => (props.plankPositioning ? '200px' : '0')};
    flex-direction:${(props) => (props.pickPosition ? 'row' : '')};
    justify-content:center;
    padding:${(props) => (props.pickPosition ? '50px' : '')};
  }
`

export const UnorderedList = styled.ul`
color:#F7FEFF;
display: list-item;
text-align:center;
`
export const ContainerForMobile = styled.div`
overflow: visible;
box-sizing: border-box;
height:${(props) => props.height || '100%'};
width:${(props) => props.width || '100%'};
max-width:${(props) => props.maxWidth || '300px'};
display:${(props) => (props.visible ? 'none' : 'flex')};
flex-direction:${(props) => props.flexDirection || 'column'};
justify-content: ${(props) => props.justifyContent || 'flex-start'};
position:relative;
align-items:${(props) => props.alignItems || 'center'};
background:${(props) => props.background};
border:${(props) => props.border || ''};
border-radius:${(props) => props.borderRadius || 'none'};
padding:${(props) => props.padding || '0px 8px 8px 8px'};
  @media (min-width: 1024px) {
    display:none;
    overflow: hidden;
  }
`

export const ContainerForBiggerScreens = styled.div`
display:none;
background:${(props) => props.background};
border:${(props) => props.borderRadius || ''};
border-radius:${(props) => props.borderRadius || 'none'};
flex-direction:${(props) => props.flexDirection || 'row'};
justify-content: ${(props) => props.justifyContent || 'flex-start'};
padding:${(props) => props.padding || '0px 8px 8px 8px'};
align-items: center;
  @media (min-width: 1024px) {
      display:flex;
  }
    @media (min-width: 1440px) {
      display:flex;
      flex-direction:row;
      flex-wrap:wrap;
      max-width:380px;
  }
`

export const Form = styled.form`
width: 90%;
box-sizing: border-box;
display: flex;
flex-direction: column;
padding: 10px;
justify-content: flex-start;
position: relative;
padding:10%;
align-items: center;
background: rgb(237, 253, 255);
border: 2px solid #FFE600;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 8px;

  @media (min-width: 1024px) {

  }

`

export const CardsFlexContainer = styled.div`
display:flex;
position:relative;
flex-direction:column;
align-items:center;
justify-content:center;
gap:20px;
padding:20px 0;
width: 300px;
align-items:flex-start;
box-sizing: border-box;

  @media (min-width: 1024px) {
    flex-direction:row;
    flex-wrap:wrap;
    gap: 20px 120px;
    padding: 20px 0px;
    width: 1000px;

  }
    @media (min-width: 1440px) {
    flex-direction:row;
    flex-wrap:wrap;
    gap: 20px 520px;
    padding: 20px 0px;
    width: 1400px;

  }
  `
export const PickYourPositionContainer = styled.div`
display:flex;
position:relative;
flex-direction:column;
align-items:center;
justify-content:center;
height:max-content;
gap:20px;
width:92%;
max-width:328px;
box-sizing: border-box;
border-radius:${(props) => props.borderRadius || '0'};
background:${(props) => props.background};

@media (min-width: 1024px) {
flex-direction:row;
max-width:960px;
}
@media (min-width: 1440px) {
    flex-direction:column;
    max-width:550px;
    height:100%;
}
`
export const QuestionsContainer = styled.div`
display:flex;
position:relative;
flex-direction:column;
align-items:center;
justify-content:center;
height:max-content;
gap:20px;
width:92%;
max-width:328px;
box-sizing: border-box;
border-radius:${(props) => props.borderRadius || '0'};
background:${(props) => props.background};

@media (min-width: 1024px) {
flex-direction:row-reverse;
max-width:960px;
}
@media (min-width: 1440px) {

}
`

export const BenefitContainer = styled.div`
display:flex;
position:relative;
flex-direction:column;
align-items:center;
justify-content:center;
height:max-content;
gap:20px;
width:92%;
max-width:328px;
box-sizing: border-box;
border-radius:8px;
background:#004852;
padding:20px;
@media (min-width: 1024px) {
flex-direction:row;
max-width:800px;
p, div{
    width:50%;
};
};
@media (min-width: 1440px) {
flex-direction:column;
max-width:300px;
position:absolute;
top:53%;
left:50%;
transform:translate(-50%, -50%);
p, div{
    width:100%;
    box-sizing:border-box;
}
}
  `

export const QuestionContainer = styled.div`
box-sizing: border-box;
height:100%;
width:100%;
max-width:100%;
display:flex;
flex-direction:column;
justify-content: center;
position:relative;
align-items:center;
background:#EDFDFF;
border:${(props) => props.border || ''};
border-radius:13px;


  @media (min-width: 1024px) {
    align-self:stretch;
    height:auto;
    width:${(props) => (props.form ? '70%' : '100%')};
  }
  `