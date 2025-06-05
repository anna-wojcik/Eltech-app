import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { StyledSection } from "../../StyledSection";
import { Container, Form, Paragraph, SpanBlue, StyledInput, StyledSelect, SubTitle, Title, Wrapper, SpanRed, Acknowledgement, StyledLink, Box } from "./styled";
import { selectSelectedJobId } from "../careerSlice";
import { jobOfferList } from "../../../jobOfferList";
import FormButton from "../FormButton";

export const FormSummary = () => {
    let getFormData = JSON.parse(localStorage.getItem("formData"));
    const [firstName, setFirstName] = useState(getFormData.firstName);
    const [lastName, setLastName] = useState(getFormData.lastName);
    const [gender, setGender] = useState(getFormData.gender);
    const [email, setEmail] = useState(getFormData.email);
    const [phone, setPhone] = useState(getFormData.phone);
    const [country, setCountry] = useState(getFormData.country);
    const [city, setCity] = useState(getFormData.city);
    const [cv, setCv] = useState([]);
    const [salaryExpectations, setSalaryExpectations] = useState(getFormData.salaryExpectations);
    const [errors, setErrors] = useState({});
    const [isSend, setIsSend] = useState(false);
    const thanksRef = useRef(null);
    const summaryRef = useRef(null);

    useEffect(() => {
        if(summaryRef.current) {
            summaryRef.current.scrollIntoView({ behavior: 'smooth'});
        }
    }, []);

    useEffect(() => {
        if(isSend && thanksRef.current) {
            thanksRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [isSend]);

    const selectedJobId = useSelector(selectSelectedJobId);

    if (!selectedJobId) {
        return null;
    }
    const selectedJob = jobOfferList.find(task => task.id === selectedJobId);

    const checkData = (data, pattern) => {
        if (!pattern.test(data)) {
            return false;
        }
        return true;
    };

    const validateForm = () => {
        const patternName = /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]{1,19}$/;
        const patternLastName = /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]{1,39}(-[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]{1,39})?$/;
        const patternEmail = /^([a-zA-Z0-9])+([.a-zA-Z0-9_-])*@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-]+)+/;
        const patternPhone = /^[0-9]{9}$/;

        const patternCity = /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]{1,39}(?:[\s-][A-ZĄĆĘŁŃÓŚŹŻa-ząćęłńóśźż]{2,40})*$/;

        let newErrors = {};
        if (!checkData(firstName, patternName)) {
            newErrors = {
                ...newErrors,
                firstName: "Wpisz poprawnie imię",
            }
        }

        if (!checkData(lastName, patternLastName)) {
            newErrors = {
                ...newErrors,
                lastName: "Wpisz poprawnie nazwisko",
            }
        }

        if (!gender) {
            newErrors = {
                ...newErrors,
                gender: "Wybierz płeć",
            }
        }

        if (!checkData(email, patternEmail)) {
            newErrors = {
                ...newErrors,
                email: "Wpisz poprawnie adres e-mail",
            }
        }

        if (!checkData(phone, patternPhone)) {
            newErrors = {
                ...newErrors,
                phone: "Wpisz poprawnie numer telefonu",
            }
        }

        if (!country) {
            newErrors = {
                ...newErrors,
                country: "Wybierz kraj",
            }
        }

        if (!checkData(city, patternCity)) {
            newErrors = {
                ...newErrors,
                city: "Wpisz poprawnie nazwę miasta",
            }
        }

        if (cv.length === 0) {
            newErrors = {
                ...newErrors,
                cv: "Dołącz plik CV",
            }
        }

        if (!salaryExpectations) {
            newErrors = {
                ...newErrors,
                salaryExpectations: "Wybierz oczekiwania finansowe",
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        if (validateForm()) {
            const formData = {
                firstName, lastName, gender, email, phone, country, city,
                cv: cv.name, salaryExpectations
            };
            localStorage.setItem("formData", JSON.stringify(formData));
            setIsSend(true);
        } else {
            return;
        }
    };

    if(isSend) {
        return (
            <StyledSection ref={thanksRef}>
                <Acknowledgement>Dziękujemy za przesłanie formularza !</Acknowledgement>
                <Box>
                    <StyledLink to="/">Przejdź do strony głównej</StyledLink>
                </Box>
            </StyledSection>
        )
    }

    return (
        <StyledSection ref={summaryRef}>
            <Title>Podsumowanie formularza aplikacyjnego</Title>
            <Paragraph>
                Dokonaj sprawdzenia danych oraz ewentualnej edycji. Aby ostatecznie wysłać formularz kliknij w przycisk “Wyślij”
            </Paragraph>
            <SubTitle>
                Aplikujesz na stanowisko <SpanBlue>{selectedJob.name}</SpanBlue>
            </SubTitle>
            <Form onSubmit={onFormSubmit}>
                <Container>
                    <Wrapper>
                        <label htmlFor="firstName">Imię</label>
                        <StyledInput
                            id="firstName"
                            value={firstName}
                            onChange={({ target }) => setFirstName(target.value)}
                            required
                        />
                        <SpanRed $error>{errors.firstName}</SpanRed>
                    </Wrapper>
                    <Wrapper>
                        <label htmlFor="lastName">Nazwisko</label>
                        <StyledInput
                            id="lastName"
                            value={lastName}
                            onChange={({ target }) => setLastName(target.value)}
                            required
                        />
                        <SpanRed $error>{errors.lastName}</SpanRed>
                    </Wrapper>
                    <Wrapper>
                        <label htmlFor="gender">Płeć</label>
                        <StyledSelect
                            id="gender"
                            value={gender}
                            onChange={({ target }) => setGender(target.value)}
                            required
                        >
                            <option value="Kobieta">Kobieta</option>
                            <option value="Mężczyzna">Mężczyzna</option>
                        </StyledSelect>
                        <SpanRed $error>{errors.gender}</SpanRed>
                    </Wrapper>
                    <Wrapper>
                        <label htmlFor="email">E-mail</label>
                        <StyledInput
                            id="email"
                            value={email}
                            onChange={({ target }) => setEmail(target.value)}
                            required
                        />
                        <SpanRed $error>{errors.email}</SpanRed>
                    </Wrapper>
                    <Wrapper>
                        <label htmlFor="phone">Numer telefonu</label>
                        <StyledInput
                            id="phone"
                            value={phone}
                            onChange={({ target }) => setPhone(target.value)}
                            required
                        />
                        <SpanRed $error>{errors.phone}</SpanRed>
                    </Wrapper>
                    <Wrapper>
                        <label htmlFor="country">Kraj</label>
                        <StyledSelect
                            id="country"
                            value={country}
                            onChange={({ target }) => setCountry(target.value)}
                            required
                        >
                            <option value="Polska">Polska</option>
                            <option value="Niemcy">Niemcy</option>
                            <option value="Ukraina">Ukraina</option>
                            <option value="Francja">Francja</option>
                            <option value="Anglia">Anglia</option>
                            <option value="Czechy">Czechy</option>
                            <option value="USA">USA</option>
                            <option value="other">Inny kraj</option>
                        </StyledSelect>
                        <SpanRed $error>{errors.country}</SpanRed>
                    </Wrapper>
                    <Wrapper>
                        <label htmlFor="city">Miasto</label>
                        <StyledInput
                            id="city"
                            value={city}
                            onChange={({ target }) => setCity(target.value)}
                            required
                        />
                        <SpanRed $error>{errors.city}</SpanRed>
                    </Wrapper>
                    <Wrapper>
                        <label htmlFor="cv">Plik CV</label>
                        <StyledInput
                            id="cv"
                            type="file"
                            onChange={({ target }) => setCv(target.files[0])}
                            accept=".pdf, .doc, .docx, .txt, .jpg, .jpeg, .png"
                            required
                        />
                        <SpanRed $error>{errors.cv}</SpanRed>
                    </Wrapper>
                    <Wrapper>
                        <label htmlFor="salaryExpectations">Oczekiwania finansowe</label>
                        <StyledSelect
                            id="salaryExpectations"
                            value={salaryExpectations}
                            onChange={({ target }) => setSalaryExpectations(target.value)}
                            required
                        >
                            <option value="do 2000">do 2 000 zł</option>
                            <option value="2000-4000">2 000 - 4 000 zł</option>
                            <option value="4000-6000">4 000 - 6 000 zł</option>
                            <option value="6000-8000">6 000 - 8 000 zł</option>
                            <option value="10000-12000">10 000 - 12 000 zł</option>
                            <option value="12000-14000">12 000 - 14 000 zł</option>
                            <option value="powyżej 15000">powyżej 15 000 zł</option>
                        </StyledSelect>
                        <SpanRed $error>{errors.salaryExpectations}</SpanRed>
                    </Wrapper>
                </Container>
                <FormButton content="Wyślij" feature="inSummary" />
            </Form>
        </StyledSection>
    )
};

export default FormSummary;