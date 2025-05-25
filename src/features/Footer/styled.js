import styled, { css } from "styled-components";

export const StyledFooter = styled.footer`
    min-height: 340px;
    background: ${({ theme }) => theme.colors.footer.background};
    padding: 50px 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 60px;

    @media(max-width: 1400px){
        padding: 50px;
    }

    @media(max-width: 1024px){
        gap: 30px;
    }

    @media(max-width: 640px){
        padding: 20px;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 70px;

    ${({ $secondWrapper }) => $secondWrapper && css`
        gap: 92px;
    `};

    @media(max-width: 1024px){
        flex-direction: column;
        gap: 30px;

        ${({ $secondWrapper }) => $secondWrapper && css`
            gap: 20px;
        `};
    }

    @media(max-width: 640px){
        align-items: flex-start;
    }
`;

export const Paragraph = styled.p`
    font-size: 24px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.footer.content};
    margin: 0;
    max-width: 900px;

    ${({ $smallFont }) => $smallFont && css`
        font-size: 18px;
        font-weight: 400;
    `};

    @media(max-width: 1024px){
        font-size: 18px;

        ${({ $smallFont }) => $smallFont && css`
            font-size: 14px;
        `};
    }
`;

export const Span = styled.span`
    font-weight: 800;
`;

export const ListIcons = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 32px;

    @media(max-width: 1024px){
        margin-bottom: 30px;
    }
`;