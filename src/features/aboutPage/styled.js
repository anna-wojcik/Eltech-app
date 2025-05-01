import styled, { css } from "styled-components";

export const Paragraph = styled.p`
    font-size: 24px;
    font-weight: 400;
    line-height: 1.5;
    margin: 0;

    @media(max-width: 1400px){
        font-size: 20px;
    }

    @media(max-width: 850px){
        font-size: 16px;
    }

    ${({ $characteristicParagraph }) => $characteristicParagraph && css`
        font-size: 20px;
        font-weight: 400;
        line-height: 1.25;

        @media(max-width: 850px){
            font-size: 16px;
        }
    `};

    ${({ $margins }) => $margins && css`
        margin: 100px 0; 

        @media(max-width: 850px){
            margin: 40px 0;    
        }
    `};
`;

export const Title = styled.h2`
    font-size: 30px;
    font-weight: 700;
    margin: 60px 0;

    @media(max-width: 1400px){
        margin: 40px 0;
        font-size: 24px;
    }
`;

export const WrapperList = styled.div`
    display: flex;
    justify-content: center;
`;

export const List = styled.ul`
    list-style-type: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(2, 500px);
    column-gap: 40px;
    row-gap: 40px;
    margin: 0;

    @media(max-width: 1400px){
        grid-template-columns: repeat(1, 600px);
    }

    @media(max-width: 850px){
        grid-template-columns: 1fr;
    }
`;

export const Item = styled.li`
    border-left: 2px solid #5064E2;
    padding: 20px;
    height: 250px;
    display: flex;
    justify-content: center;
    gap: 30px;

    @media(max-width: 850px){
        height: 200px;
        gap: 10px;
    }

    @media(max-width: 480px){
        flex-direction: column;
        height: auto;
    }
`;

export const SubTitle = styled.h3`
    color: #DF18FB;
    font-size: 20px;
    font-weight: 500;
    margin: 0;
    margin-bottom: 30px;

    @media(max-width: 850px){
        font-size: 16px;
    }
`;

export const Box = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Image = styled.img`
    height: 120px;
    width: 120px;
    align-self: center;

    @media(max-width: 850px){
        height: 80px;
        width: 80px;
    }
`;