import styled from "styled-components";
import imageBackground from "../../images/hero.png";

export const Container = styled.div`
    background-image: url(${imageBackground});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-position-y: -50px;
    height: 720px;
    background-color: ${({ theme }) => theme.colors.hero.background};
    display: grid;
    grid-template-columns: 100px 1fr 1fr 100px;
    grid-template-rows: 50px 1fr 1fr 50px;

    @media(max-width: 1400px){
        grid-template-columns: 50px 1fr 1fr 50px;
    }

    @media(max-width: 720px) {
        background-position-y: 120px;
        background-size: 200%;
        height: 800px;
    }

    @media(max-width: 640px){
        grid-template-columns: 20px 1fr 1fr 20px;
    }

    @media(max-width: 480px){
        grid-template-columns: 20px 1fr 20px;
    }
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.colors.hero.content};
    font-size: 38px;
    font-weight: 500px;
    margin: 0;
    line-height: 1.5;
    grid-column-start: 2;
    grid-row-start: 2;

    @media(max-width: 1024px){
        font-size: 32px;
    }
    @media(max-width: 640px){
        font-size: 24px;
        line-height: 1.7;
    }
`;

export const Description = styled.p`
    color: ${({ theme }) => theme.colors.hero.content};
    font-size: 28px;
    font-weight: 500px;
    line-height: 1.3;
    grid-column-start: 3;
    grid-row-start: 3;
    margin: 0;

    @media(max-width: 1400px){
        font-size: 24px;
        line-break: normal;
    }

    @media(max-width: 720px) {
        font-size: 18px;
        display: flex;
        align-items: flex-end;
    }

    @media(max-width: 640px){
        font-size: 18px;
    }

    @media(max-width: 480px){
        grid-column-start: 2;
    }
`;

export const Box = styled.div`
    height: 140px;
    background: ${({ theme }) => theme.colors.subHeader.background};
    display: flex;
    justify-content: center;
    align-items: center;

    @media(max-width: 1024px) {
        height: 120px;
    }

    @media(max-width: 640px){
        height: 90px;
    }
`;

export const SubHeader = styled.h2`
    margin: 0;
    font-size: 40px;
    color: ${({ theme }) => theme.colors.subHeader.content};
    
    @media(max-width: 1024px) {
        font-size: 30px;
    }

    @media(max-width: 640px){
        font-size: 16px;
    }
`;

export const Year = styled.span`
    font-size: 60px;
    color: ${({ theme }) => theme.colors.subHeader.year};

    @media(max-width: 1024px) {
        font-size: 40px;
    }

    @media(max-width: 640px){
        font-size: 26px;
    }
`;