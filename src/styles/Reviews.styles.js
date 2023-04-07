import styled from 'styled-components';

export const StyledReviews = styled.section`
    background-color: ${({ theme }) => (theme.colors.teal)};
    max-width: 100vw;
    padding: 24px;

    .review-wrapper {
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
   
    .each-review {
        width: 100%;
        max-width: 450px;
        display: flex;
        flex-direction: column;
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

    @media (min-width: 768px) and (max-width: 1024px) {
        padding: 32px 0;

        h2 {
            padding: 0 32px;
        }
    }

    @media (min-width: 1025px) {
        padding: 40px 72px 72px 72px;

        .review-wrapper {
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-evenly;
            max-width: 1450px;
        }

        .each-review {
            height: 550px;
            width: 300px;
        }

        .review-body {
            height: 220px;
        }

        .review-by {
            align-self: flex-end;
            margin: 1em 0 1em 0;
          }
    }
`