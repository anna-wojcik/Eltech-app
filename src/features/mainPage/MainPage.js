import Hero from '../Hero';
import Section from '../Section';
import About from '../About';

export default () => (
    <>
        <Hero />
        <Section body={<About />} />
    </>
);