import styled, { css } from "styled-components";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export const Title = styled.h2`
    font-size: 30px;
    font-weight: 700;
    margin: 0;

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
    color: #33363F;
    margin: 40px 0;

    @media(max-width: 640px) {
        font-size: 14px;
    }
`;

export const SpanBlue = styled.span`
    color: #5064E2;
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
    color: #DF18FB;
    padding: 6px 12px; 
    width: 100%;
    border: 1px solid #C9C9C9;

    @media(max-width: 640px){
        padding: 4px 8px;
    }
`;

export const StyledSelect = styled.select`
    color: #DF18FB;
    padding: 6px 12px; 
    width: 100%;
    background: #FFFFFF;
    border: 1px solid #C9C9C9;

    @media(max-width: 640px){
        padding: 4px 8px;
    }
`;

export const SpanRed = styled.span`
    color: #D20000;

    ${({ $error }) => $error && css`
        font-size: 12px;
    `}
`;

export const Acknowledgement = styled.p`
    color: #DF18FB;
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
    color: #DF18FB;
    font-size: 30px;
    font-weight: 400;
    align-items: center;
    text-align: center;

    &:hover {
        color: #EB5DFF;
    }
    &:active {
        color: #F4A5FF;
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