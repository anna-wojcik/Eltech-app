import styled, { css } from "styled-components";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export const Title = styled.h2`
    font-size: 30px;
    font-weight: 700;
    margin: 0;
    color: ${({ theme }) => theme.colors.formSummary.title};

    @media(max-width: 1400px){
        font-size: 24px;
    }

    @media(max-width: 640px) {
        font-size: 20px;
    }
`;

export const SubTitle = styled.h3`
    font-size: 24px;
    font-weight: 400;
    text-align: center;
    margin: 50px 0;
    color: ${({ theme }) => theme.colors.formSummary.title};

    @media(max-width: 1400px) {
        font-size: 20px;
        margin: 30px 0;
    }

    @media(max-width: 640px) {
        font-size: 16px;
    }
`;

export const Paragraph = styled.p`
    font-size: 18px;
    font-weight: 400px;
    color: ${({ theme }) => theme.colors.formSummary.content};
    margin: 40px 0;

    @media(max-width: 640px) {
        font-size: 14px;
    }
`;

export const SpanBlue = styled.span`
    color: ${({ theme }) => theme.colors.formSummary.jobName};
    font-weight: 600;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 60px;
    row-gap: 20px;

    @media(max-width: 640px) {
        grid-template-columns: 1fr;
        font-size: 16px;
        row-gap: 4px;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    width: 400px;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.formSummary.labelColor};

    @media(max-width: 992px){
        width: 250px;
        gap: 6px;
    }

    @media(max-width: 640px){
        font-size: 14px;
        width: 280px;
    }
`;

export const StyledInput = styled.input`
    color: ${({ theme }) => theme.colors.formSummary.colorInput};
    padding: 6px 12px; 
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.formSummary.borderInput};
    background: ${({ theme }) => theme.colors.formSummary.backgroundInput};

    @media(max-width: 640px){
        padding: 4px 8px;
    }
`;

export const StyledSelect = styled.select`
    color: ${({ theme }) => theme.colors.formSummary.colorInput};
    padding: 6px 12px; 
    width: 100%;
    background: ${({ theme }) => theme.colors.formSummary.backgroundInput};
    border: 1px solid ${({ theme }) => theme.colors.formSummary.borderInput};

    @media(max-width: 640px){
        padding: 4px 8px;
    }
`;

export const SpanRed = styled.span`
    color: ${({ theme }) => theme.colors.formSummary.required};

    ${({ $error }) => $error && css`
        font-size: 12px;
    `}
`;

export const Acknowledgement = styled.p`
    color: ${({ theme }) => theme.colors.formSummary.acknowledgement};
    font-size: 40px;
    font-weight: 500;
    align-items: center;
    text-align: center;

    @media(max-width: 1400px){
        font-size: 30px;
    }

    @media(max-width: 640px) {
        font-size: 24px;
    }
`;

export const StyledLink = styled(Link)`
    color: ${({ theme }) => theme.colors.formSummary.link};
    font-size: 30px;
    font-weight: 400;
    align-items: center;
    text-align: center;

    &:hover {
        color: ${({ theme }) => theme.colors.formSummary.linkHover};
    }
    &:active {
        color: ${({ theme }) => theme.colors.formSummary.linkActive};
    }

    @media(max-width: 1400px){
        font-size: 24px;
    }

    @media(max-width: 640px) {
        font-size: 18px;
    }
`;

export const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 300px;
`;