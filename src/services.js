import bulbIcon from "./images/bulb-icon.svg";
import opticalFiberIcon from "./images/optical-fiber-icon.svg";
import serviceIcon from "./images/service-icon.svg";
import solarPanelIcon from "./images/solar-panel-icon.svg";
import electricalInstallationsImage from "./images/electrical-installations.png";
import fiberInstallationsImage from "./images/fiber-installations.png";
import photovoltaicInstallationsImage from "./images/photovoltaic-installations.png";
import serviceImage from "./images/service.png";

export const services = [
    {
        name: "Instalacje elektryczne",
        icon: bulbIcon,
        id: "instalacje-elektryczne",
        path: "/oferta#instalacje-elektryczne",
        picture: electricalInstallationsImage,
        description: "Bez względu na to, czy tworzysz nową przestrzeń do życia, modernizujesz istniejący budynek czy rozwijasz swoją działalność, solidna instalacja elektryczna to podstawa. Zapewniamy kompleksowe usługi elektryczne, dostosowane do Twoich potrzeb – od projektu, przez montaż, aż po pomiary i serwis. Dbamy o bezpieczeństwo, nowoczesne technologie i energooszczędne rozwiązania, byś mógł cieszyć się niezawodnym systemem na lata.",
        rangeOfServices: [
            "Wykonanie pełnej instalacji elektrycznej (z materiałem i bez)",
            "Montaż instalacji podtynkowych i natynkowych",
            "Bruzdowanie i przygotowanie tras kablowych",
            "Montaż rozdzielni elektrycznych i zabezpieczeń",
            "Pomiary elektryczne z protokołem odbioru",
            "Podłączenie płyt indukcyjnych i piekarników",
            "Instalacja i wymiana gniazdek, wyłączników oraz oświetlenia",
            "Wynoszenie liczników na zewnątrz budynków",
            "Instalacje domofonowe i wideodomofonowe, odgromowe"
        ],
    },
    {
        name: "Instalajce światłowodowe",
        icon: opticalFiberIcon,
        id: "instalajce-swiatlowodowe",
        path: "/oferta#instalajce-swiatlowodowe",
        picture: fiberInstallationsImage,
        description: "Dzięki instalacji światłowodowej zapewnisz sobie stabilne i superszybkie połączenie internetowe w domu, biurze czy hali produkcyjnej. Tworzymy nowoczesne sieci światłowodowe, które gwarantują niezawodność, niskie opóźnienia i wysoką jakość transmisji danych.",
        rangeOfServices: [
            "Wykonanie instalacji światłowodowej w budynkach mieszkalnych i komercyjnych",
            "Spawanie i pomiary światłowodów",
            "Montaż gniazd światłowodowych oraz skrzynek FTTH",
            "Budowa szaf telekomunikacyjnych i rozdzielni",
            "Przeciąganie i organizacja kabli światłowodowych",
            "Konfiguracja oraz testowanie sieci światłowodowych",
        ],
    },
    {
        name: "Instalacje fotowoltaiczne",
        icon: solarPanelIcon,
        id: "instalajce-fotowoltaiczne",
        path: "/oferta#instalajce-fotowoltaiczne",
        picture: photovoltaicInstallationsImage,
        description: "Zredukuj koszty energii i zadbaj o środowisko dzięki odnawialnym źródłom energii. Projektujemy i montujemy systemy fotowoltaiczne dostosowane do Twoich potrzeb, pozwalające na niezależność energetyczną i oszczędności przez lata. Inwestuj w przyszłość – skontaktuj się z nami, a dobierzemy najlepsze rozwiązanie dla Ciebie!",
        rangeOfServices: [
            "Dobór i montaż paneli fotowoltaicznych",
            "Instalacja falowników i zabezpieczeń systemowych",
            "Wykonanie okablowania i podłączenie do sieci elektrycznej",
            "Pomiary i testy wydajności instalacji",
            "Projekt instalacji fotowoltaicznej",
        ],
    },
    {
        name: "Serwis i konserwacja",
        icon: serviceIcon,
        id: "serwis",
        path: "/oferta#serwis",
        picture: serviceImage,
        description: "Regularna kontrola instalacji to klucz do jej niezawodności i długiej żywotności. Oferujemy diagnostykę, usuwanie usterek oraz modernizację systemów elektrycznych, światłowodowych i fotowoltaicznych. Dzięki przeglądom i konserwacji unikniesz kosztownych napraw i przestojów. Sprawdzamy stan przewodów, zabezpieczeń, połączeń oraz wydajność instalacji, dbając o Twoje bezpieczeństwo i komfort. Zaufaj specjalistom – skontaktuj się z nami, a zadbamy o sprawność Twoich systemów!",
        rangeOfServices: [
            "Diagnostyka i usuwanie usterek elektrycznych, światłowodowych i fotowoltaicznych",
            "Przeglądy okresowe i pomiary elektryczne",
            "Naprawa przeciążeń oraz zwarć w instalacji",
            "Naprawa uszkodzonych kabli światłowodowych",
            "Serwis i konserwacja automatyki budynkowej (bramy, rolety, inteligentne systemy sterowania)",
            "Naprawa systemów domofonowych i wideodomofonowych"
        ],
    },
];