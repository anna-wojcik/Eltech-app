import styled, { css } from "styled-components";

export const BackgroundImage = styled.div`
  background-image: url(${({ $src }) => $src});
  background-size: cover;
  background-position: center;
  height: 550px;
  display: flex;
  justify-content: center;
  position: relative;

  @media(max-width: 1400px){
        height: 400px;
    }

    @media(max-width: 640px){
        height: 300px;
    }
`;

export const Box = styled.div`
    width: 550px;
    height: 200px;
    background: ${({ theme }) => theme.colors.offerPage.backgroundBox};
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: -100px;
    box-shadow: 0px 0px 14px 3px rgba(66, 68, 90, 1);

    @media(max-width: 1400px){
        width: 400px;
        height: 150px;
        bottom: -75px;
    }

    @media(max-width: 640px){
        width: 210px;
        height: 100px;
        bottom: -50px;
    }
`;

export const Title = styled.h2`
    font-size: 40px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.offerPage.title};
    max-width: 300px;
    margin: 0;
    text-align: center;

    @media(max-width: 1400px){
        font-size: 32px;
    }

    @media(max-width: 640px){
        font-size: 20px;
    }
`;

export const Container = styled.div`
    margin: 0 100px;
    padding: 190px 0;

    @media(max-width: 1400px){
        margin: 0 50px;
        padding: 160px 0;
    }

    @media(max-width: 640px){
        margin: 0 20px;
        padding: 130px 0;
    }
`;

export const Paragraph = styled.p`
    font-size: 24px;
    font-weight: 400;
    line-height: 1.5;
    margin: 0;
    color: ${({ theme }) => theme.colors.offerPage.content};

    @media(max-width: 1400px){
        font-size: 20px;
    }

    @media(max-width: 850px){
        font-size: 16px;
    }

    ${({ $serviceParagraph }) => $serviceParagraph && css`
        font-weight: 500px;
        line-height: 1;
        text-align: center;
        color: ${({ theme }) => theme.colors.offerPage.itemContent};
    `};
`;

export const SubTitle = styled.h3`
    font-size: 30px;
    font-weight: 700;
    margin: 60px 0;
    color: ${({ theme }) => theme.colors.offerPage.content};

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
    grid-template-columns: repeat(3, 400px);
    row-gap: 30px;
    column-gap: 30px;

    @media(max-width: 1400px){
        grid-template-columns: repeat(2, 350px);
    }

    @media(max-width: 850px){
        grid-template-columns: repeat(1, 280px);
    }
`;

export const Item = styled.li`
    border: 2px solid ${({ theme }) => theme.colors.offerPage.border};
    background: ${({ theme }) => theme.colors.offerPage.backgroundBox};
    border-radius: 20px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px;

    @media(max-width: 850px){
        height: 160px;
        padding: 30px;
    }
`;

