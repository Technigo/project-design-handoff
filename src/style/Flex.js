import styled from 'styled-components';

export const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: absolute;
    padding: 32px;
`

export const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
    position: absolute;
    padding: 32px;
`

export const FlexColumnNoPosition = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
`