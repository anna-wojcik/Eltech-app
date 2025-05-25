import styled from "styled-components";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 52px;
    row-gap: 106px; 

    @media(max-width: 850px) {
        grid-template-columns: 1fr;
        row-gap: 52px;
    }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 280px;
    width: 400px;
    box-shadow: 0px 0px 11px -4px ${({ theme }) => theme.colors.serviceList.boxShadow};
    padding: 20px;
    color: ${({ theme }) => theme.colors.serviceList.content};
    background: ${({ theme }) => theme.colors.serviceList.background};

    &:hover {
        box-shadow: 0px 0px 30px 0px ${({ theme }) => theme.colors.serviceList.boxShadowHover};
    }

    @media(max-width: 1024px) {
        height: 220px;
        width: 340px;
    }

    @media(max-width: 640px) {
        height: 160px;
        width: 280px;
    }
`;

export const Icon = styled.img`
    height: 160px;
    width: 160px;

    @media(max-width: 1024px) {
        height: 100px;
        width: 100px;
    }

    @media(max-width: 640px) {
        height: 80px;
        width: 80px;
    }
`;

export const Title = styled.h2`
    font-size: 30px;
    font-weight: 500;
    text-transform: uppercase;
    margin: 0;

    @media(max-width: 1024px) {
        font-size: 25px;
    }

    @media(max-width: 640px) {
        font-size: 20px;
    }
`;