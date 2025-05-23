import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Container, Description, Title, StyledForm, BackgroundImage, Box, SubTitle, Wrapper, SpanRed, StyledInput, StyledSelect, GenderContainer } from "./styled";
import { jobOfferList } from "../../../jobOfferList";
import { selectSelectedJobId } from "../careerSlice";
import FormButton from "../FormButton";

export const ApplicatinForm = ({ setShowSummary }) => {
    const selectedJobId = useSelector(selectSelectedJobId);
    const selectedJob = jobOfferList.find(job => job.id === selectedJobId);
    const history = useHistory();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [cv, setCv] = useState([]);
    const [salaryExpectations, setSalaryExpectations] = useState("");

    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (!selectedJob) {
            history.push("/kariera");
        }
    }, [selectedJob, history]);

    if (!selectedJob) {
        return null;
    }

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
            const formData = {firstName, lastName, gender, email, phone, country, city, 
                cv: cv.name, salaryExpectations};
            localStorage.setItem("formData", JSON.stringify(formData));
            setShowSummary(true);
        } else {
            return;
        }
    };

    return (
        <Container id="applicationForm">
            <BackgroundImage $src={selectedJob.image}></BackgroundImage>
            <StyledForm onSubmit={onFormSubmit}>
                <Title>Formluarz aplikacyjny</Title>
                <Description $firm>ELTECH</Description>
                <Description $jobName>{selectedJob.firstName}</Description>
                <Box>
                    <SubTitle>Dane personalne</SubTitle>
                    <Wrapper>
                        <label htmlFor="firstName">
                            Imię <SpanRed>*</SpanRed>
                        </label>
                        <StyledInput
                            id="firstName"
                            value={firstName}
                            onChange={({ target }) => setFirstName(target.value)}
                            placeholder="Wpisz"
                            title="-Imię powinno zawierać od 2 do 20 liter
                            -Imię musi zaczynać się od wielkiej litery"
                            required
                        />
                        <SpanRed $error>{errors.firstName}</SpanRed>
                    </Wrapper>
                    <Wrapper>
                        <label htmlFor="lastName">
                            Nazwisko <SpanRed>*</SpanRed>
                        </label>
                        <StyledInput
                            id="lastName"
                            value={lastName}
                            onChange={({ target }) => setLastName(target.value)}
                            placeholder="Wpisz"
                            required
                            title="-Nazwisko powinno zawierać od 2 do 40 liter
                            -Nazwisko musi zaczynać się od wielkiej litery
                            -Może wystąpić myślnik"
                        />
                        <SpanRed $error>{errors.lastName}</SpanRed>
                    </Wrapper>
                    <Wrapper>
                        <div>
                            Płeć <SpanRed>*</SpanRed>
                        </div>
                        <GenderContainer>
                            <div>
                                <input
                                    id="gender-female"
                                    type="radio"
                                    name="gender"
                                    value="Kobieta"
                                    onChange={({ target }) => setGender(target.value)}
                                    required
                                /> Kobieta
                            </div>
                            <div>
                                <input
                                    id="gender-male"
                                    type="radio"
                                    name="gender"
                                    value="Mężczyzna"
                                    onChange={({ target }) => setGender(target.value)}
                                    required
                                /> Mężczyzna
                            </div>
                        </GenderContainer>
                        <SpanRed $error>{errors.gender}</SpanRed>
                    </Wrapper>
                    <Wrapper>
                        <label htmlFor="email">
                            Email <SpanRed>*</SpanRed>
                        </label>
                        <StyledInput
                            id="email"
                            value={email}
                            onChange={({ target }) => setEmail(target.value)}
                            type="email"
                            placeholder="Wpisz"
                            required
                        />
                        <SpanRed $error>{errors.email}</SpanRed>
                    </Wrapper>
                    <Wrapper>
                        <label htmlFor="phone">
                            Numer telefonu <SpanRed>*</SpanRed>
                        </label>
                        <StyledInput
                            id="phone"
                            value={phone}
                            onChange={({ target }) => setPhone(target.value)}
                            placeholder="Tylko cyfry np. 123456789"
                            required
                            title="Numer telefonu musi zawierać 9 cyfr"
                        />
                        <SpanRed $error>{errors.phone}</SpanRed>
                    </Wrapper>
                </Box>

                <Box>
                    <SubTitle>Dane kontaktowe</SubTitle>
                    <Wrapper>
                        <label htmlFor="country">
                            Kraj <SpanRed>*</SpanRed>
                        </label>
                        <StyledSelect
                            id="country"
                            value={country}
                            onChange={({ target }) => setCountry(target.value)}
                            required
                        >
                            <option value="" disabled hidden>Wybierz</option>
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
                        <label htmlFor="city">
                            Miasto <SpanRed>*</SpanRed>
                        </label>
                        <StyledInput
                            id="city"
                            value={city}
                            onChange={({ target }) => setCity(target.value)}
                            placeholder="Wpisz"
                            required
                            title="-Miasto musi zaczynać się od wielkiej litery
                            -Miasto może zawierać spacje lub myślnik
                            -Minimum dwie litery"
                        />
                        <SpanRed $error>{errors.city}</SpanRed>
                    </Wrapper>
                </Box>

                <Box>
                    <SubTitle>Plik CV</SubTitle>
                    <Wrapper>
                        <label htmlFor="cv">
                            Załącz plik ze swoim CV <SpanRed>*</SpanRed>
                        </label>
                        <StyledInput
                            id="cv"
                            onChange={({ target }) => setCv(target.files[0])}
                            type="file"
                            accept=".pdf, .doc, .docx, .txt, .jpg, .jpeg, .png"
                            placeholder="Dodaj plik"
                            required
                            $cvInput
                        />
                        <SpanRed $error>{errors.cv}</SpanRed>
                    </Wrapper>
                </Box>

                <Box>
                    <SubTitle>Oczekiwania finansowe</SubTitle>
                    <Wrapper>
                        <label htmlFor="salaryExpectations">
                            Określ swoje oczekiwania finansowe <SpanRed>*</SpanRed>
                        </label>
                        <StyledSelect
                            id="salaryExpectations"
                            value={salaryExpectations}
                            onChange={({ target }) => setSalaryExpectations(target.value)}
                            required
                        >
                            <option value="" disabled hidden>Wybierz</option>
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
                </Box>
                <FormButton content="Dalej" feature="inForm"/>
            </StyledForm>
        </Container>
    )
};

export default ApplicatinForm;