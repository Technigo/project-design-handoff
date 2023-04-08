import styled from 'styled-components';

export const Button = styled.button`
        background: ${(props) => (props.secondary ? '#FFFFFF' : '#DCD2F1')};
        border-radius: 100px;
        border: none;
        color: #222322;
        height: ${(props) => (props.headerBtn ? '38px' : '58px')};
        width: ${(props) => (props.headerBtn ? '150px' : '205px')};
        font-weight: 700;
        font-size: ${(props) => (props.headerBtn ? '12px' : '18px')};
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        &:hover {
            background: ${(props) => (props.secondary ? '#FFFFFF' : '#A99BD1')};
            font-size: ${(props) => (props.secondary ? '17px' : '')};
    }
`

export const ButtonOutlined = styled(Button)`
        background: transparent;
        border: 1px solid #FFFFFF;
        color: #FFFFFF;
    
        &:hover {
            font-size: 17px;
            background: transparent;
    }
`;

export const ButtonCommunity = styled.button`
        background: ${(props) => (props.iconBtn ? 'transparent' : '#DCD2F1')}; 
        color: #222322;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        height: 64px;
        border: ${(props) => (props.iconBtn ? '1px solid #222322' : 'none')}; 
        width: ${(props) => (props.iconBtn ? 'calc(50% - 10px)' : '100%')};
        font-weight: 500;
        font-size: ${(props) => (props.iconBtn ? '16px' : '18px')};
        gap: ${(props) => (props.iconBtn ? '10px' : '')};
        cursor: pointer;
        padding: 0;
        
        @media (max-width: 768px) {
        height: 48px;
       width: ${(props) => (props.iconBtn ? '100%' : '')};
  }  
`;

export const ButtonCommunityLogin = styled.button`
        border: none;
        background: transparent;
        font-weight: 700;
        font-size: 16px;
        cursor: pointer;  
`;
