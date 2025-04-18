import { Container, Title, Description, Box, SubHeader, Year } from "./styled";
export const Hero = () => (
    <>
        <Container>
            <Title>Nowoczesne <br /> Instalacje elektryczne, <br />Światłowodowe i <br />Fotowoltaiczne</Title>
            <Description>
                Tworzymy nowoczesne i bezpieczne<br />
                instalacje elektryczne, światłowodowe<br /> oraz fotowoltaiczne, które zapewniają<br /> komfort, niezawodność i szybki dostęp<br /> do technologii – dziś i w przyszłości
            </Description>
        </Container>
        <Box>
            <SubHeader>
                Jesteśmy od <Year>2019</Year> roku na rynku
            </SubHeader>
        </Box>
    </>
);

export default Hero;