import styled, { css } from "styled-components";
import { ReactComponent as PhoneIcon } from "../../images/phone.svg";
import { ReactComponent as MenuIcon } from "../../images/menu.svg";

export const StyledHeader = styled.header`
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 100px;
    box-shadow: 0px 0px 8px 0px ${({ theme }) => theme.colors.header.boxShadow};
    position: sticky;
    top: 0;
    background: ${({ theme }) => theme.colors.header.background};
    z-index: 1000;
    width: 100%;

    @media(max-width: 1400px){
        padding: 0 50px;
    }

    @media(max-width: 640px){
        padding: 0 20px;
    }
`;

export const Phone = styled(PhoneIcon)`
    color: ${({ theme }) => theme.colors.phone.color};
`;

export const Menu = styled(MenuIcon)`
    color: ${({ theme }) => theme.colors.phone.color};
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 44px;

    ${({ $phoneWrapper }) => $phoneWrapper && css`
        gap: 4px;

        @media(max-width: 1100px){
            display: none;
        }
    `};
    @media(max-width: 1100px){
        gap: 20px;
    }
`;

export const Paragraph = styled.p`
    margin: 0;
    color: ${({ theme }) => theme.colors.navigation.content};
`;

export const ButtonMenu = styled.button`
    border: none;
    background: none;
    cursor: pointer;
`;
