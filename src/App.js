import { Switch, Route, HashRouter, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import MainPage from "./features/mainPage/MainPage";
import OfferPage from "./features/offerPage/OfferPage";
import AboutPage from "./features/aboutPage/AboutPage";
import CareerPage from "./features/careerPage/CareerPage";
import ContactPage from "./features/contactPage/ContactPage";
import Header from "./features/Header";
import Footer from "./features/Footer";

function App() {
  return (
    <HashRouter basename="/eltech.pl">
      <Header />
      

      <Switch>
        <Route path="/oferta">
          <OfferPage />
        </Route>
        <Route path="/o-nas">
          <AboutPage />
        </Route>
        <Route path="/kariera">
          <CareerPage />
        </Route>
        <Route path="/kontakt">
          <ContactPage />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>

      <Footer />
    </HashRouter>
  );
};

export default App;
