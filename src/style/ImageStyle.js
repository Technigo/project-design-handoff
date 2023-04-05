import styled from 'styled-components';

export const Image = styled.img`
    border-radius: 30px;
    width: 358px;
    object-fit: cover;
    height: 100vh;
    border: none;
    display: block ;
`

export const BgImg = styled(Image)`
    object-fit: scale-down;
    object-position: -50% 50%;

`