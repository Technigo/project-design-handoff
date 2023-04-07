
import styled from 'styled-components';

export const FlexContainer = styled.div`
box-sizing: border-box;
height:${(props) => props.height || '100%'};
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

  @media (min-width: 1024px): {
   display:${(props) => (props.nomobile ? 'flex' : 'none')};
  }

`

export const GridContainer = styled.div`
height:100%;
width:100%;
display: grid;
flex-direction: column;
justify-content: flex-start;
position:relative;
align-items: center;
`

export const UnorderedList = styled.ul`
color:#F7FEFF;
display: list-item;
padding:10px 0;
text-align:center;
width:70%;
`

export const ContainerForMobile = styled.div`
overflow: visible;
box-sizing: border-box;
height:${(props) => props.height || '100%'};
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
`

export const Form = styled.form`
width: 100%;
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

  @media (min-width: 1024px): {
 
  }

`