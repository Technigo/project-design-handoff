import styled from 'styled-components/macro';

export const StyledYoga = styled.section`
    background-color: ${({ theme }) => (theme.colors.beige)};
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px 24px 48px 24px;

    span {
        font-weight: bold;
    }

    video {
        width: 100%;
        border-radius: 12px;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        padding: 32px;
    }

    @media (min-width: 1025px) {
        padding: 40px 72px 72px 72px;        
    }
`

export const YogaIntro = styled.div`
    width: 90%;
    max-width: 550px;
    align-self: flex-start;
`
export const VideoWrapper = styled.div`
@media (min-width: 1025px) {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    max-width: 1450px;        
}
`
export const EachVideo = styled.div`
    display: ${(props) => props.display || 'flex'};
    flex-direction: column;
    max-width: 450px;

@media (min-width: 1025px) {
    display: flex;
    flex-direction: column;
    max-width: 300px;   
}
`

export const VideoLabels = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

p {
    margin: 10px 0 2px 0;
    font-size: 14px;
    color: ${({ theme }) => (theme.colors.teal)};
}
`

