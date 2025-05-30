import styled from "styled-components";

export const StyledSection = styled.section`
    margin: 0 100px;
    height: 40px;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media(max-width: 1400px){
        margin: 0 50px;
    }
    @media(max-width: 640px){
        margin: 0 20px;
    }
`;

export const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: flex-end;
    gap: 24px;

`;

export const Item = styled.li`
    color: ${({ theme }) => theme.colors.currencyBar.content};
    font-weight: 300; 
    font-size: 14px;
`;

export const Paragraph = styled.p`
    margin: 0;
    font-size: 14px;
    font-weight: 300; 
    padding: 0;
`;