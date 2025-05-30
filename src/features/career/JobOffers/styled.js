import styled, { css } from "styled-components";
import { ReactComponent as LocalisationIcon } from "../../../images/localisation.svg";

export const List = styled.ul`
    padding: 0;
    list-style-type: none;
    margin: 50px 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 40px;

    @media(max-width: 1400px) {
        margin-top: 30px; 
    }

    @media(max-width: 1040px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 30px;
    }
`;

export const Item = styled.li`
    width: 460px;
    border-radius: 20px;
    background: ${({ theme }) => theme.colors.careerPage.itemBackground};
    color: ${({ theme }) => theme.colors.careerPage.content};
    padding: 34px;

    @media(max-width: 1400px) {
        width: 400px;
        padding: 24px;
    }

    @media(max-width: 640px) {
        width: 280px;
        padding: 24px;
    }
`;

export const Paragraph = styled.p`
    margin: 0;
    margin-bottom: 34px;
    font-size: 24px;
    color: ${({ theme }) => theme.colors.careerPage.content};

    ${({ $typeStyle }) => $typeStyle && css`
        font-size: 20px;
        font-weight: 200;
        margin-bottom: 20px;
        text-transform: uppercase;
    `}

    ${({ $marginNone }) => $marginNone && css`
        margin: 0;
    `};

    @media(max-width: 1400px) {
        margin-bottom: 30px;
        font-size: 20px;

        ${({ $typeStyle }) => $typeStyle && css`
            margin-bottom: 18px;
            font-size: 16px;
        `};

        ${({ $marginNone }) => $marginNone && css`
            margin: 0;
        `};
    }

    @media(max-width: 640px) {
        font-size: 18px;

        ${({ $typeStyle }) => $typeStyle && css`
            font-size: 14px;
        `};
    }
`;

export const Box = styled.div`
    display: flex;
    align-items: center;
    gap: 25px;
    margin-bottom: 34px;

    @media(max-width: 1400px) {
        margin-bottom: 30px;
    }
`;

export const Localisation = styled(LocalisationIcon)`
    color: ${({ theme }) => theme.colors.localisation.color};
`;

export const Button = styled.button`
    height: 40px;
    background: ${({ theme }) => theme.colors.careerPage.buttonBackground};
    color: ${({ theme }) => theme.colors.careerPage.buttonContent};
    border: none;
    border-radius: 30px;
    width: 100%;
    cursor: pointer;

    &:hover {
        background: ${({ theme }) => theme.colors.careerPage.buttonBackgroundHover};
    }

    &:active {
        background: ${({ theme }) => theme.colors.careerPage.buttonBackgroundActive};
    }

    @media(max-width: 1400px) {
        height: 36px;
    }
`;