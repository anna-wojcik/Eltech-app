import electricalInstallationsImage from "./images/electrical-installations.png";
import fiberInstallationsImage from "./images/fiber-installations.png";
import photovoltaicInstallationsImage from "./images/photovoltaic-installations.png";

export const jobOfferList = [
    {
        id: 1,
        name: "Elektryk",
        city: "Lublin",
        type: "Pracownik budowlany",
        expectactions: [
            "Brak przeciwwskazań zdrowotnych do pracy na wysokości",
            "Preferowane wykształcenie o profilu elektrycznym lub pokrewnym",
            "Uprawnienia SEP – mile widziane",
            "Doświadczenie w montażu instalacji elektrycznych – atutem",
            "Umiejętność czytania schematów elektrycznych",
            "Dokładność, samodzielność i umiejętność pracy w zespole"
        ],
        tasks: [
            "Montaż instalacji elektrycznych",
            "Pomiary elektryczne",
            "Bruzdowanie i przygotowanie tras kablowych",
            "Zakładanie osprzętu"
        ],
        image: electricalInstallationsImage,
    },
    {
        id: 2,
        name: "Technik światłowodowy",
        city: "Lublin",
        type: "Pracownik budowlany",
        expectactions: [
            "Brak przeciwwskazań do pracy na wysokości i w terenie",
            "Wykształcenie techniczne – telekomunikacja, elektrotechnika lub pokrewne",
            "Doświadczenie w instalacji i spawaniu światłowodów – mile widziane",
            "Umiejętność posługiwania się reflektometrem i spawarką światłowodową",
        ],
        tasks: [
            "Instalacja i spawanie światłowodów",
            "Serwis i konserwacja sieci FTTH",
            "Testowanie i pomiary jakości sygnału",
        ],
        image: fiberInstallationsImage,
    },
    {
        id: 3,
        name: "Technik instalacji fotowoltaicznych",
        city: "Lublin",
        type: "Pracownik budowlany",
        expectactions: [
            "Brak przeciwwskazań do pracy na wysokości i w zmiennych warunkach atmosferycznych",
            "Wykształcenie techniczne – elektryka, OZE, budownictwo lub pokrewne",
            "Doświadczenie w montażu paneli fotowoltaicznych – mile widziane",
            "Umiejętność pracy z narzędziami budowlanymi",
            "Znajomość zasad montażu systemów PV i podłączania falowników",
        ],
        tasks: [
            "Montaż i serwis paneli fotowoltaicznych",
            "Podłączanie falowników i zabezpieczeń elektrycznych",
            "Pomiary wydajności i diagnostyka systemów PV",
        ],
        image: photovoltaicInstallationsImage,
    }
];