import DateTime from "../DateTime";
import { Title, WrapperList, List, Item, Paragraph, SubTitle, Box, Image } from "./styled";
import { characteristics } from "../../characteristics";
import LinkButton from "../LinkButton";
import Authorities from "../Authorities";
import { StyledSection } from "../StyledSection";

export default () => (
    <>
        <StyledSection>
            <DateTime />
            <Title>Władze spółki:</Title>
            <Authorities />
            <Paragraph>
                Jesteśmy dynamicznie rozwijającą się spółką, której fundamentem jest elektryka, jednak nieustannie poszerzamy zakres naszych usług o instalacje światłowodowe i fotowoltaiczne. Dzięki 8-letniemu doświadczeniu i nowoczesnemu podejściu realizujemy kompleksowe projekty w nowo powstałych blokach, biurowcach i domach.
            </Paragraph>
        </StyledSection>
        <StyledSection>
            <Title>Co nas wyróżnia:</Title>
            <WrapperList>
                <List>
                    {characteristics.map(({ name, description, image }) => (
                        <Item key={name}>
                            <Box>
                                <SubTitle>{name}</SubTitle>
                                <Paragraph $characteristicParagraph>
                                    {description}
                                </Paragraph>
                            </Box>
                            <Image src={image} alt={name}></Image>
                        </Item>
                    ))}
                </List>
            </WrapperList>
            <Paragraph $margins>
                Tworzymy instalacje dostosowane do współczesnych potrzeb, zapewniając naszym klientom komfort, bezpieczeństwo i dostęp do nowoczesnych technologii.
            </Paragraph>
            <LinkButton />
        </StyledSection>
    </>
);