import styled from 'styled-components';

export const PrimaryBtn = styled.button`
    background-color: #DCD2F1;
    border: none;
    border-radius: 20px;
    padding: 18px 36px;
    color: #222322;
    font-size: 18px;
    width: 225px;

    &:hover {
        background-color: #A99BD1;
    }
`;

export const SecondaryBtn = styled.button`
    background-color: #FFFFFF;
    border: none;
    border-radius: 20px;
    padding: 16px 32px;
    color: #222322;
    font-size: 18px;
    width: 205px;
    margin-top: 8px;

    &:hover {
        font-size: 17px;
    }
`;

export const OutlinedBtn1 = styled.button`
    background-color: transparent;
    border: 1px solid white;
    border-radius: 20px;
    padding: 18px 36px;
    color: #FFFFFF;
    font-size: 18px;

    &:hover {
        font-size: 17px;
    }
`;

export const OutlinedBtn2 = styled.button`
    background-color: transparent;
    border: 1px solid black;
    border-radius: 20px;
    padding: 18px 36px;
    color: black;
    font-size: 14px;
    width: 100%;

    @media (min-width: 667px) {
        font-size: 16px;
    }
`;