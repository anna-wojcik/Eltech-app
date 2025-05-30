import styled from "styled-components";
import { ReactComponent as LocalisationIcon } from "../../images/localisation.svg";
import { ReactComponent as PhoneIcon } from "../../images/phone.svg";
import { ReactComponent as MessageIcon } from "../../images/message.svg";

export const Title = styled.h2`
    font-size: 30px;
    font-weight: 700;
    margin: 0;
    margin-bottom: 30px;
    color: ${({ theme }) => theme.colors.careerPage.title};

    @media(max-width: 1400px){
        font-size: 24px;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;

    @media(max-width: 1400px) {
        gap: 20px;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

export const Localisation = styled(LocalisationIcon)`
    color: ${({ theme }) => theme.colors.localisation.color};
    height: 40px;
    width: 40px;

    @media(max-width: 1400px) {
        height: 30px;
        width: 30px;
    }
`;

export const Phone = styled(PhoneIcon)`
    color: ${({ theme }) => theme.colors.localisation.color};
    height: 40px;
    width: 40px;

    @media(max-width: 1400px) {
        height: 30px;
        width: 30px;
    }
`;

export const Message = styled(MessageIcon)`
    color: ${({ theme }) => theme.colors.localisation.color};
    height: 40px;
    width: 40px;

    @media(max-width: 1400px) {
        height: 30px;
        width: 30px;
    }
`;

export const Paragraph = styled.p`
    color: ${({ theme }) => theme.colors.contactPage.content};
    font-size: 24px;
    font-weight: 400;
    margin: 0;
    line-height: 1.5;

    @media(max-width: 1400px) {
        font-size: 20px;
    }
    @media(max-width: 850px) {
        font-size: 16px;
    }
`;

export const MapContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledIframe = styled.iframe`
    border: none;
    height: 500px;
    width: 80%;

    @media(max-width: 640px){
        width: 100%;
        height: 350px;
        zoom: 0.8;
    }
`;