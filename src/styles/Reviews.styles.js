import styled from 'styled-components';

export const StyledReviews = styled.section`
    background-color: ${({ theme }) => (theme.colors.teal)};
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
   
    div {
        width: 95%;
        display: flex;
        flex-direction: column;
        /* align-items: center; */
        /* margin: 10px 0; */
    }

    img {
        width: 100%;
        height: 245px;
        object-fit: cover;
        border-radius: 12px;
    }

    h2 {
        color: ${({ theme }) => (theme.colors.cream)};
        align-self: flex-start;
    }

    p {
        color: ${({ theme }) => (theme.colors.cream)};
        font-size: 16px;
        
    }

    .review-body {
        line-height: 1.5em;
    }

    .review-by {
        align-self: flex-end;
        font-style: italic;
        margin: 3em 0 1em 0;

    }
`