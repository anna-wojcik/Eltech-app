import { services } from "../../services";
import { BackgroundImage, Box, Container, Item, List, Paragraph, SubTitle, Title, WrapperList } from "./styled";
import { useEffect } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

export default () => {
    const location = useLocation();

    useEffect(() => {
        const hash = location.hash;
        if (hash) {
            const id = hash.replace("#", "");
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: "smooth" });
                }, 100);
            }
        }
    }, [location]);

    return (
        <>
            {services.map(({ name, id, picture, description, rangeOfServices }) => (
                <section id={id} key={id}>
                    <BackgroundImage $src={picture}>
                        <Box>
                            <Title>{name}</Title>
                        </Box>
                    </BackgroundImage>
                    <Container>
                        <Paragraph>{description}</Paragraph>
                        <SubTitle>Zakres usług:</SubTitle>
                        <WrapperList>
                            <List>
                                {rangeOfServices.map((service, index) => (
                                    <Item key={index}>
                                        <Paragraph $serviceParagraph>{service}</Paragraph>
                                    </Item>
                                ))}
                            </List>
                        </WrapperList>
                    </Container>
                </section>
            ))}
        </>
    );
};