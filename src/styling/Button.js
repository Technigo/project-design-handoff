import styled from 'styled-components';

export const PrimaryBtn = styled.btn`
    background-color: #DCD2F1;
    border: none;
    border-radius: 20px;
    color: #222322;
    font-size: 18px;

    &:hover {
        background-color: #A99BD1;
    }
`;

export const SecondaryBtn = styled.btn`
    background-color: #FFFFFF;
    border: none;
    border-radius: 20px;
    color: #222322;
    font-size: 18px;

    &:hover {
        font-size: 17px;
    }
`;

export const OutlinedBtn = styled.btn`
    background-color: transparent;
    border: 1px solid white;
    border-radius: 20px;
    color: #FFFFFF;
    font-size: 18px;

    &:hover {
        font-size: 17px;
    }
`;