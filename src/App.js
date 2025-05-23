import { Switch, Route, HashRouter } from "react-router-dom/cjs/react-router-dom.min";
import MainPage from "./features/mainPage/MainPage";
import OfferPage from "./features/offerPage/OfferPage";
import AboutPage from "./features/aboutPage/AboutPage";
import CareerPage from "./features/career/careerPage/CareerPage";
import ContactPage from "./features/contactPage/ContactPage";
import Header from "./features/Header";
import Footer from "./features/Footer";
import ScrollHandler from "./features/ScrollHandler";
import ApplicationPage from "./features/career/applicationPage/ApplicationPage";
import RouteListener from "./features/RouteListener";

function App() {
  return (
    <HashRouter basename="/eltech.pl">
      <RouteListener />
      <ScrollHandler />
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
        <Route path="/formularz-aplikacyjny">
          <ApplicationPage />
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
