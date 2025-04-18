import styled, { css } from "styled-components";

export const StyledHeader = styled.header`
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 100px;

    @media(max-width: 1400px){
        margin: 0 50px;
    }

    @media(max-width: 640px){
        margin: 0 20px;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 64px;

    ${({ $phoneWrapper }) => $phoneWrapper && css`
        gap: 4px;
    `};
`;

export const Paragraph = styled.p`
    margin: 0;
`;
