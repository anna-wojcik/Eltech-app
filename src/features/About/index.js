import { useSelector } from "react-redux";
import { Description, Title, PinkContent, Wrapper, Image } from "./styled";
import vectorMapLight from "../../images/vector-maps-light.svg";
import vectorMapDark from "../../images/vector-maps-dark.svg";
import LinkButton from "../LinkButton";
import { selectIsDark } from "../ThemeSwitch/themeSlice";

export const About = () => {
    const isDark = useSelector(selectIsDark);

    return (
        <>
            <Wrapper>
                <Wrapper $content>
                    <Title>Działamy w województwie lubelskim</Title>
                    <Description>
                        Wykonujemy nowoczesne <PinkContent>instalacje elektryczne</PinkContent>, <PinkContent>światłowodowe</PinkContent> i <PinkContent>fotowoltaiczne</PinkContent>. Specjalizujemy się w realizacji projektów dla nowo powstałych bloków, biurowców i domów, zapewniając bezpieczeństwo i niezawodność.
                    </Description>
                    <LinkButton />
                </Wrapper>
                {isDark ? <Image src={vectorMapDark} alt="Poland"></Image> : <Image src={vectorMapLight} alt="Poland"></Image>}
            </Wrapper>
        </>
    )
};

export default About;