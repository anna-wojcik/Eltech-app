import styled, { css } from "styled-components";

export const StyledHeader = styled.header`
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 100px;
    box-shadow: 0px 0px 16px rgba(0,0,0,.08),
        48.6492px 63.508px 80px rgba(0,0,0,.04),
        9.72983px 12.7016px 13px rgba(0,0,0,.02);
    position: sticky;
    top: 0;
    background: white;
    z-index: 1000;
    width: 100%;

    @media(max-width: 1400px){
        padding: 0 50px;
    }

    @media(max-width: 640px){
        padding: 0 20px;
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
