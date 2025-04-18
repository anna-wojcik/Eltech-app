import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 80px;

    ${({ $content }) => $content && css`
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        gap: 0;
    `}

    @media(max-width: 1200px) {
        gap: 40px;

        ${({ $content }) => $content && css`
            gap: 0;
        `}
    }

    @media(max-width: 850px) {
        flex-direction: column;
    }
`;

export const Title = styled.h2`
    font-size: 40px;
    font-weight: 700;
    color: #000000;
    margin: 0;

    @media(max-width: 1024px) {
        font-size: 32px;
    }

    @media(max-width: 640px) {
        font-size: 28px;
    }
`;

export const Description = styled.p`
    font-size: 30px;
    font-weight: 400;
    margin-top: 30px;
    margin-bottom: 100px;

    @media(max-width: 1024px) {
        font-size: 22px;
        margin-bottom: 60px;
    }

    @media(max-width: 640px) {
        font-size: 18px;
    }
`;

export const PinkContent = styled.span`
    color: #DF18FB;
`;

export const Image = styled.img`
    height: 490px;
    width: 517px;

    @media(max-width: 1200px) {
        height: 440px;
        width: 467px;
    }

    @media(max-width: 1024px) {
        height: 390px;
        width: 417px;
    }

    @media(max-width: 480px) {
        height: 240px;
        width: 277px;
    }
`;