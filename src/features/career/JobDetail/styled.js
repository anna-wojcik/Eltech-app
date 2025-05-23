import styled, { css } from "styled-components";

export const Container = styled.div`
    background: #F1F1F1;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 20px;
    padding: 30px;

    @media(max-width: 1200px) {
        padding: 20px;
    }
`;

export const Paragraph = styled.p`
    margin: 0;
    color: #000000;
    font-size: 24px;

    @media(max-width: 1400px) {
        font-size: 20px;
    }

    @media(max-width: 640px) {
        font-size: 18px;
    }

    ${({ $pink }) => $pink && css`
        font-size: 30px;
        font-weight: 600;
        color: #DF18FB;

        @media(max-width: 1400px) {
            font-size: 24px;
        }

        @media(max-width: 640px) {
            font-size: 20px;
        }
    `}

    ${({ $fontLight }) => $fontLight && css`
        font-weight: 300;
    `}
`;

export const Title = styled.h2`
    font-size: 30px;
    font-weight: 600;
    margin: 0;

    @media(max-width: 1400px){
        font-size: 24px;
    }
`;

export const List = styled.ul`
    margin: 40px 0;

    @media(max-width: 1400px){
        margin: 30px 0;
    }

    @media(max-width: 640px){
        margin: 20px 0;
        padding-left: 20px;
    }
`;

export const Item = styled.li`
    padding: 6px;
    font-size: 24px;

    @media(max-width: 1400px) {
        font-size: 20px;
    }

    @media(max-width: 640px) {
        font-size: 16px;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const ButtonShowForm = styled.button`
    width: 400px;
    height: 100px;
    background: #5064E2;
    color: #FFFFFF;
    font-size: 50px;
    font-weight: 600;
    border: none;
    margin: 50px;

    &:hover {
        background: #2188FF;
    }

    &:active {
        background: #4C98EF;
    }

    @media(max-width: 1400px) {
        width: 300px;
        height: 80px;
        font-size: 40px;
        margin: 30px;
    }

    @media(max-width: 640px) {
        width: 200px;
        height: 60px;
        font-size: 30px;
        margin: 20px;
    }
`;