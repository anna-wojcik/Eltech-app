import styled, { css } from "styled-components";

export const StyledSection = styled.section`
    margin: 0 100px;
    padding: 100px 0;

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

        ${({ $offMargin }) => $offMargin && css`
            margin: 0;
        `}
    }

    @media(max-width: 850px){
        padding: 50px 0;

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

export const Title = styled.h2`
    color: #DF18FB;
    font-size: 40px;
    font-weight: 500;
    margin: 0;

    @media(max-width: 1024px){
        font-size: 32px;
    }

    @media(max-width: 640px) {
        font-size: 28px;
    }
`;

export const BlackContent = styled.span`
    color: #000000;
`;

export const Description = styled.p`
    color: #000000;
    font-size: 24px;
    font-weight: 300;
    max-width: 884px;
    margin: 20px 0 60px;

    @media(max-width: 1024px) {
        font-size: 18px;
    }

    @media(max-width: 640px) {
        font-size: 14px;
    }
`;

