import styled, { css } from "styled-components";

export const StyledButton = styled.button`
    height: 27px;
    width: 48px;
    border-radius: 13px;
    background: ${({ theme }) => theme.colors.themeSwitch.background};
    border: 1px solid ${({ theme }) => theme.colors.themeSwitch.border};
    position: relative;
    cursor: pointer;
`;

export const Box = styled.div`
    ${({ $flicker }) => $flicker && css`
        position: absolute;
        top: 3px;
        left: 3px;
        height: 20px;
        width: 20px;
        border-radius: 10px;
        background: ${({ theme }) => theme.colors.themeSwitch.flickerBaground};
        transition: 0.3s;

        ${({ $move }) => $move && css`
            transform: translateX(20px);
        `}
    `};

    ${({ $sun }) => $sun && css`
        position: absolute;
        top: 5px;
        left: 6px;
        transition: 0.3s;
        
        ${({ $move }) => $move && css`
            transform: translateX(20px);
        `}
    `};
`;