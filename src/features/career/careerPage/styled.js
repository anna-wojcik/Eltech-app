import styled from "styled-components";

export const Title = styled.h2`
    font-size: 30px;
    font-weight: 700;
    margin: 0;
    color: ${({ theme }) => theme.colors.careerPage.title};

    @media(max-width: 1400px){
        font-size: 24px;
    }
`;