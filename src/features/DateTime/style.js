import styled from "styled-components";

export const Paragraph = styled.p`
    font-size: 20px;
    font-weight: 300;
    margin: 0; 
    color: ${({ theme }) => theme.colors.dateTime.content};
`;