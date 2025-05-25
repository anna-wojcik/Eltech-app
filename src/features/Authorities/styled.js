import styled from "styled-components"

export const List = styled.ul`
    margin: 40px 0;
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    row-gap: 32px;

    @media(max-width: 640px){
        justify-content: center;
    }
`;

export const Item = styled.li`
    background: ${({ theme }) => theme.colors.authorities.background};
    border-radius: 20px;
    width: 300px;
    box-shadow: 0px 0px 3px 0px ${({ theme }) => theme.colors.authorities.boxShadow};
    
    @media(max-width: 1200px){
        width: 250px;
    }
`;

export const Image = styled.img`
    width: 300px;
    border-radius: 20px 20px 0 0;
    
    @media(max-width: 1200px){
        width: 250px;
    }
`;

export const Box = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
`;

export const Name = styled.h3`
    margin: 0;
    font-size: 28px;
    font-weight: 600;

    @media(max-width: 1200px){
        font-size: 24px;
    }
`;

export const Role = styled.p`
    margin: 0;
    font-size: 22px;
    font-weight: 300;
    
    @media(max-width: 1200px){
        font-size: 18px;
    }
`;
