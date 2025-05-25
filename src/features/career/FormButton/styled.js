import styled, { css } from "styled-components";

export const StyledButton = styled.button`
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.colors.formButton.background};
    color: ${({ theme }) => theme.colors.formButton.color};
    border: none;

    ${({ $inForm }) => $inForm && css`
        width: 400px;
        height: 60px;
        font-size: 20px;
        margin: 60px;
        border-radius: 20px;

        @media(max-width: 1400px){
            font-size: 16px;
            border-radius: 15px;
            width: 300px;
            height: 40px;
            margin: 40px;
        }

        @media(max-width: 640px){
            width: 180px;
            height: 40px;
            border-radius: 12px;
            margin: 30px;
        }
    `}

    ${({ $inSummary }) => $inSummary && css`
        margin: 0px;
        width: 300px;
        height: 40px;
        margin: 40px 20px;

        @media(max-width: 992px){
            font-size: 16px;
            width: 200px;
            margin: 30px 20px;
        }

        @media(max-width: 640px){
            width: 180px;
            height: 30px;
            margin: 0px;
        }
    `}

    &:hover {
        background: ${({ theme }) => theme.colors.formButton.hover};
    }

    &:active {
        background: ${({ theme }) => theme.colors.formButton.active};
    }
`;