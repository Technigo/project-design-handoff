import styled from 'styled-components/macro';

export const StyledReviews = styled.section`
    background-color: ${({ theme }) => (theme.colors.teal)};
    max-width: 100vw;
    padding: 24px;

    img {
        width: 100%;
        height: 245px;
        object-fit: cover;
        border-radius: 12px;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        padding: 32px 0;

        h2 {
            padding: 0 32px;
        }
    }

    @media (min-width: 1025px) {
        padding: 40px 72px 72px 72px;
    }
`

export const ReviewWrapper = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;

@media (min-width: 1025px) {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    max-width: 1450px;
}
`

export const EachReview = styled.div`
    width: 100%;
    max-width: 450px;
    display: flex;
    flex-direction: column;

@media (min-width: 1025px) {
    height: 550px;
    width: 300px;
}
`

export const ReviewBody = styled.p`
    line-height: 1.5em;
    color: ${({ theme }) => (theme.colors.cream)};
    font-size: 16px;

@media (min-width: 1025px) {
    height: 220px;
}
`

export const ReviewBy = styled.p`
    align-self: flex-end;
    font-style: italic;
    margin: 3em 0 1em 0;
    color: ${({ theme }) => (theme.colors.cream)};
    font-size: 16px;

@media (min-width: 1025px) {
    align-self: flex-end;
    margin: 1em 0 1em 0;
    }
`