import styled, { css } from "styled-components";

export const StyledSection = styled.section`
    margin: 0 100px;
    padding: 80px 0 0;

    ${({ $displayMiddle }) => $displayMiddle && css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
    `}

    ${({ $offMargin }) => $offMargin && css`
        margin: 0;
    `}

    @media(max-width: 1400px){
        margin: 0 50px;
        padding: 50px 0 0;

        ${({ $offMargin }) => $offMargin && css`
            margin: 0;
        `}
    }

    @media(max-width: 850px){
        padding: 50px 0 0;

        ${({ $offMargin }) => $offMargin && css`
            margin: 0;
        `}
    }

    @media(max-width: 640px){
        margin: 0 20px;
        ${({ $offMargin }) => $offMargin && css`
            margin: 0;
        `}
    }
`;