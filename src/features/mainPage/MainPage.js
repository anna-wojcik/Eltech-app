import Hero from '../Hero';
import About from '../About';
import ServiceList from '../ServiceList';
import Slider from '../Slider';
import { slides } from '../../slides';
import { Title, BlackContent, Description } from "./styled";
import { StyledSection } from "../StyledSection";

export default () => (
    <>
        <Hero />
        <StyledSection>
            <About />
        </StyledSection>
        <StyledSection $displayMiddle>
            <Title>Obszary działalności</Title>
            <br />
            <Description>
                Wybierz usługę, z której chcesz skorzystać, a my zajmiemy się resztą! Profesjonalna realizacja, nowoczesne rozwiązania i najwyższa jakość usług.
            </Description>
            <ServiceList />
        </StyledSection>
        <StyledSection $displayMiddle $offMargin>
            <Title>
                Co Mówią
                <br />
                <BlackContent>O Nas Klienci</BlackContent>
            </Title>
            <Description>
                Zaufało nam setki klientów, dołącz do nich i bądź zadowolony z wykonanej przez nas usługi
            </Description>
            <Slider slides={slides} />
        </StyledSection>
    </>
);