import styled from 'styled-components';

export const StyledNutrition = styled.section`
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

    /* .recipe-section {
        display: flex;
    } */

    .recipe-card {
        display: flex;
        flex-direction: column;
        width: 90%;
        align-items: center;
    }

    .recipe-info {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        width: 225px;
    }

    .recipe-info p{
        margin: 10px 0 2px 0;
        font-size: 14px;
    }

    .recipe-title {
        width: 60%;
    }

    .recipe-card:hover > .recipe-info {
        font-weight: bold;
    }

    img {
        width: 225px;
        height: 175px;
        object-fit: cover;
        border-radius: 12px;
    }
    `