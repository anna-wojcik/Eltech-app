import { StyledSection } from "../StyledSection";
import { Container, Localisation, MapContainer, Message, Paragraph, Phone, StyledIframe, Title, Wrapper } from "./styled";
import { companyInfo } from "../../companyInfo";

export default () => {
    return (
        <>
            <StyledSection>
                <Title>Dane kontaktowe</Title>
                <Container>
                    <Wrapper>
                        <Localisation />
                        <Paragraph>{companyInfo.city}</Paragraph>
                    </Wrapper>
                    <Paragraph>
                        {companyInfo.address} <br /> {companyInfo.postalCode}, {companyInfo.city}
                    </Paragraph>

                    <Wrapper>
                        <Phone />
                        <Paragraph>{companyInfo.phone}</Paragraph>
                    </Wrapper>

                    <Wrapper>
                        <Message />
                        <Paragraph>{companyInfo.email}</Paragraph>
                    </Wrapper>
                </Container>
            </StyledSection>
            <StyledSection>
                <Title>Zobacz na mapie</Title>
                <MapContainer>
                    <StyledIframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2497.580945565326!2d22.557013776147546!3d51.24521212982375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4722576931d3e58f%3A0x81802a67fdf4d6de!2sPrezydenta%20Gabriela%20Narutowicza%2018%2F3%2C%2020-400%20Lublin!5e0!3m2!1spl!2spl!4v1748617436223!5m2!1spl!2spl"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></StyledIframe>
                </MapContainer>
            </StyledSection>
        </>
    )
};