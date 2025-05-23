import styled, { css } from "styled-components";

export const Container = styled.div`
    background: #F1F1F1;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 1900px;

    @media(max-width: 1400px){
        height: 1300px;
    }

    @media(max-width: 640px){
        height: 1180px;
    }
`;

export const BackgroundImage = styled.div`
    background-image: url(${({ $src }) => $src});
    background-size: cover;
    background-position: center;
    height: 550px;
    width: 100%;
    opacity: 0.5;
    position: relative;

    @media(max-width: 1400px){
        height: 400px;
    }

    @media(max-width: 640px){
        height: 300px;
    }
`;

export const Title = styled.h2`
    font-size: 30px;
    font-weight: 400;
    color: #000000; 
    width: 100%;
    border-bottom: 1px solid #D9D9D9;
    padding: 30px 0 20px;
    margin: 0;

    @media(max-width: 1400px){
        font-size: 22px;
        padding: 20px 0 10px;
    }

    @media(max-width: 640px){
        font-size: 16px;
        padding: 16px 0 8px;
    }
`;

export const Description = styled.p`
    margin: 0;
    
    ${({ $firm }) => $firm && css`
        font-size: 34px;
        font-weight: 800;
        color: #5064E2;
        padding: 20px;
    `}

    ${({ $jobName }) => $jobName && css`
        font-size: 24px;
        font-weight: 500;
        color: #000000;
    `}

    @media(max-width: 1400px){
        ${({ $firm }) => $firm && css`
            font-size: 28px;
            padding: 10px;
        `}

        ${({ $jobName }) => $jobName && css`
            font-size: 20px;
        `}
    }

    @media(max-width: 640px){
        ${({ $firm }) => $firm && css`
            font-size: 20px;
            padding: 10px;
        `}

        ${({ $jobName }) => $jobName && css`
            font-size: 16px;
            max-width: 240px;
        `}
    }
`;

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background: #FFFFFF;
    width: 900px;
    border-radius: 50px;
    position: absolute;
    margin: 100px 0;

    @media(max-width: 1400px){
        width: 600px;
        margin: 60px 0;
        border-radius: 40px;
    }

    @media(max-width: 640px){
        width: 280px;
        border-radius: 20px;
        margin: 60px 0;
        padding: 0 20px;
    }
`;

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 60px;
    gap: 32px;
    width: 600px;

    @media(max-width: 1400px){
        width: 400px;
        margin-top: 30px;
        gap: 20px;
    }

    @media(max-width: 640px){
        width: 100%;
        margin-top: 20px;
    }
`;

export const SubTitle = styled.h3`
    font-size: 24px;
    font-weight: 400;
    color: #000000;
    width: 100%;
    text-align: left;
    border-bottom: 2px solid #D9D9D9;
    margin: 0;

    @media(max-width: 1400px){
        font-size: 18px;
    }

    @media(max-width: 640px){
        font-size: 16px;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    font-size: 20px;
    color: #717171;
    gap: 4px;
    text-align: left;

    @media(max-width: 1400px){
        font-size: 16px;
    }
`;

export const GenderContainer = styled.div`
    display: flex;
    gap: 40px;
    width: 100%;

    @media(max-width: 1400px){
        font-size: 14px;
        padding: 6px 0;
    }
`;

export const SpanRed = styled.span`
    color: #D20000;

    ${({ $error }) => $error && css`
        font-size: 12px;
    `}
`;

export const StyledInput = styled.input`
    border-radius: 10px; 
    border: 1px solid #C9C9C9;
    padding: 10px 20px;
    width: 100%;
    font-size: 18px;
    color: #717171;

    ${({ $cvInput }) => $cvInput && css`
        height: 100px;
    `}

    @media(max-width: 1400px){
        font-size: 14px;
        padding: 6px 12px;

        ${({ $cvInput }) => $cvInput && css`
            height: 60px;
        `}
    }
`;

export const StyledSelect = styled.select`
    border-radius: 10px; 
    border: 1px solid #C9C9C9;
    padding: 10px 20px;
    width: 100%;
    font-size: 18px;
    color: #717171;
    background: none;

    @media(max-width: 1400px){
        font-size: 14px;
        padding: 6px 12px;
    }
`;