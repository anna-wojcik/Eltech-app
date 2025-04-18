import { Description, Title, PinkContent, Wrapper, Image } from "./styled";
import vectorMap from "../../images/vector-maps.svg";
import LinkButton from "../LinkButton";

export const About = () => (
    <>
        <Wrapper>
            <Wrapper $content>
                <Title>Działamy w województwie lubelskim</Title>
                <Description>
                    Wykonujemy nowoczesne <PinkContent>instalacje elektryczne</PinkContent>, <PinkContent>światłowodowe</PinkContent> i <PinkContent>fotowoltaiczne</PinkContent>. Specjalizujemy się w realizacji projektów dla nowo powstałych bloków, biurowców i domów, zapewniając bezpieczeństwo i niezawodność.
                </Description>
                <LinkButton />
            </Wrapper>
            <Image src={vectorMap} alt="Poland"></Image>
        </Wrapper>

    </>
);

export default About;