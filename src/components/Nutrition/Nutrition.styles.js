import styled from 'styled-components/macro';

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
        max-width: 550px;
    }

    p {
        color: ${({ theme }) => (theme.colors.teal)};
        font-size: 16px;
        max-width: 550px;
        align-self: flex-start;
    }

    img {
        width: 235px;
        height: 175px;
        object-fit: cover;
        border-radius: 12px;
    }

    .left-arrow, .right-arrow {
    position: absolute;
    z-index: 1;
    transform: translateY(-50%);
    font-size: 20px; 
    color: ${({ theme }) => (theme.colors.white)};
    background-color: ${({ theme }) => (theme.colors.teal)};
    border-radius: 24px;
    }

    .left-arrow {
    left: 24px;
    }

    .right-arrow {
    right: 24px;
    }

    @media (hover: none) and (pointer: coarse) {
    .left-arrow, .right-arrow {
        display: none;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        padding: 32px;
    }

    @media (min-width: 1025px) {
        padding: 40px 72px 72px 72px;

        .recipe-section {
            justify-content: center;
        }
    }

    }
    `

export const RecipeSection = styled.div`
    display: flex;
    overflow: hidden;
    align-items: flex-end;
    width: 100%;
    height: 100%;
    position: relative;
    /* justify-content: center; */

@media (min-width: 1025px) {
    justify-content: center;
}
`

export const RecipeCard = styled.div`
    display: flex;
    flex-direction: column;
    /* width: 90%; */
    align-items: center;
    margin: 10px;

`

export const RecipeInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 235px;
    
p {
    margin: 10px 0 2px 0;
    font-size: 14px;
}

${RecipeCard}:hover & {
    font-weight: bold;
}
`
export const RecipeTitle = styled.p`
    width: 60%;
`
