import styled, { css } from "styled-components";

export const StyledButton = styled.button`
    height: 27px;
    width: 48px;
    border-radius: 13px;
    background: #E5E5E5;
    border: 1px solid #6E7E91;
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
        background: #6E7E91;
    `};

    ${({ $sun }) => $sun && css`
        position: absolute;
        top: 5px;
        left: 6px;
    `};
`;