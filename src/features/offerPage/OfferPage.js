import { services } from "../../services";
import { BackgroundImage, Box, Container, Item, List, Paragraph, SubTitle, Title, WrapperList } from "./styled";

export default () => {
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