import styled from 'styled-components';

export const StyledYoga = styled.section`
    background-color: ${({ theme }) => (theme.colors.beige)};
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px 24px 48px 24px;

    h2 {
        color: ${({ theme }) => (theme.colors.teal)};
        align-self: flex-start;
        width: 90%;
    }

    p {
        color: ${({ theme }) => (theme.colors.teal)};
        font-size: 16px;
    }

    span {
        font-weight: bold;
    }

    .yoga-intro {
        width: 90%;
        max-width: 550px;
        align-self: flex-start;
    }

    .yoga-video {
        display: flex;
        flex-direction: column;
        max-width: 450px;
    }

    .yoga-video-desktop {
        display: none;
    }

    .video-labels {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
    }

    .video-labels p {
        margin: 10px 0 2px 0;
        font-size: 14px;
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

        .desktop-wrapper {
            display: flex;
            justify-content: space-evenly;
            width: 100%;
            max-width: 1450px;
        }

        .yoga-video-desktop, .yoga-video {
            display: flex;
            flex-direction: column;
            max-width: 300px;
        }
        
    }
`