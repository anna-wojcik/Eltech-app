import styled from "styled-components";

export const Title = styled.h2`
    color: #DF18FB;
    font-size: 40px;
    font-weight: 500;
    margin: 0;

    @media(max-width: 1024px){
        font-size: 32px;
    }

    @media(max-width: 640px) {
        font-size: 28px;
    }
`;

export const BlackContent = styled.span`
    color: #000000;
`;

export const Description = styled.p`
    color: #000000;
    font-size: 24px;
    font-weight: 300;
    max-width: 884px;
    margin: 20px 0 60px;

    @media(max-width: 1024px) {
        font-size: 18px;
    }

    @media(max-width: 640px) {
        font-size: 14px;
    }
`;