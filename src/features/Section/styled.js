import styled from "styled-components";

export const StyledSection = styled.section`
    margin: 0 100px;
    padding-top: 100px;

    @media(max-width: 1400px){
        margin: 0 50px;
    }

    @media(max-width: 850px){
        padding-top: 70px;
    }

    @media(max-width: 640px){
        margin: 0 20px;
    }
`;

