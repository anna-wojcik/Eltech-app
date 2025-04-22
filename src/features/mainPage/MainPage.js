import Hero from '../Hero';
import Section from '../Section';
import About from '../About';
import ServiceList from '../ServiceList';
import Slider from '../Slider';
import { slides } from '../../slides';

export default () => (
    <>
        <Hero />
        <Section body={<About />} />
        <Section
            isMiddle={true}
            title="Obszary działalności"
            content="Wybierz usługę, z której chcesz skorzystać, a my zajmiemy się resztą! Profesjonalna realizacja, nowoczesne rozwiązania i najwyższa jakość usług."
            body={<ServiceList />}
        />
        <Section
            isMiddle={true}
            title="Co Mówią"
            extraTitle="O Nas Klienci"
            content="Zaufało nam setki klientów, dołącz do nich i bądź zadowolony z wykonanej przez nas usługi"
            offMargin={true}
            body={<Slider slides={slides} />}
        />
    </>
);