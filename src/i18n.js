import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Översättningsdata för engelska och svenska
const resources = {
  en: {
    translation: {
      "frontend": "Frontend Developer / Seeking Internship",
      "CV": "Download my CV",
      "intro": "I am studying to become a frontend developer with a focus on web security. Throughout my education, I have gained comprehensive knowledge in both frontend and backend development. I am proficient in developing user interfaces using HTML, CSS, JavaScript, and React. On the backend side, I have experience with databases and server management using Node.js and Express, as well as SQL and NoSQL databases. I also have training in web security and can protect against common threats such as XSS, CSRF, and SQL injection. What I offer is that I am self-motivated and always strive to improve and develop my skills. I also dedicate time to enhancing my coding efficiency. My goal is to become a fully developed full-stack developer, but I am currently seeking an internship primarily in frontend development to start there and see where the opportunities lead.",
      "Färdigheter": "Skills",
      "Snackis": "One of my projects that reflects my current skill level. The project is a chat application where users can create an account, log in, write and post messages, and invite others to chats. The application includes: Vite, APIs, Git/GitHub, password protection, CSRF Token, JWT, Session/LocalStorage, CSP policy, log monitoring with Sentry, Crypto.randomUUID, and images hosted on freeimage.",
      "Portfolio":"On my portfolio, you can explore samples of projects and learn more about my work. You will also find a link to my GitHub, where you can see the source code for this portfolio and other projects I have created. Feel free to visit my GitHub to get a deeper insight into my code and development process.",
      "Hemsida":"website",
      "Ålder": "age: 37",
      "Bor": "Live: Stockholm.",
      "Familj": "Family: Partner, 3 dogs.",
      "Intressen": "interests: History, prehistoric civilizations.",
      "Medelande":"Send me a message",
      "Name":"Your name",
      "Kommentar":"Your comment",
      "Skicka":"Send",
      "kontakt":"Contact me:",
      "Plats":"Location: Stockholm, Sweden",
      "E-post":" E-Mail: mikaela.johansson87@gmail.com",
      "Telefon":"Phone: 073 659 39 14",
    }
  },
  sv: {
    "translation": {
      "frontend": "Frontend-utvecklare / söker LIA",
      "CV": "Ladda ner mitt CV",
      "intro": "Jag studerar till frontend-utvecklare med en specialisering inom webbsäkerhet. Under min utbildning har jag förvärvat omfattande kunskaper inom både frontend- och backend-utveckling. Jag kan utveckla användargränssnitt med HTML, CSS, JavaScript och React. På backend-sidan har jag erfarenhet av databaser och serverhantering med Node.js och Express, samt både SQL- och NoSQL-databaser. Jag har också utbildning i webbsäkerhet och kan skydda mot vanliga hot såsom XSS, CSRF och SQL-injektioner. Jag är självgående och strävar alltid efter att förbättra och utveckla mina färdigheter. Jag lägger även tid på att optimera min kodningseffektivitet. Mitt mål är att bli en fullt utvecklad fullstack-utvecklare, men jag söker för närvarande LIA främst inom frontend för att börja där och utforska de möjligheter som kan uppstå.",
      "Färdigheter": "Färdigheter",
      "Snackis": "Ett av mina projekt som speglar min nuvarande kompetensnivå. Projektet är en chattapplikation där användare kan skapa ett konto, logga in, skriva och posta meddelanden samt bjuda in andra till chattar. Applikationen innehåller: Vite, API:er, Git/GitHub, lösenordsskyddad, CSRF-Token, JWT, Session-/LocalStorage, CSP-policy, monitorering av loggar på Sentry, Crypto.randomUUID och bilder hostas på freeimage.",
      "Portfolio": "På min portfolio kan du utforska smakprov av projekt och läsa mer om mina arbeten. Här hittar du även en länk till min GitHub, där du kan se källkoden till denna portfolio och andra projekt jag har skapat. Besök gärna min GitHub för att få en djupare inblick i min kod och utvecklingsprocess.",
      "Hemsida": "Hemsida",
      "Ålder": "Ålder: 37",
      "Bor": "Bor: Stockholm.",
      "Familj": "Familj: Sambo, 3 hundar.",
      "Intressen": "Intressen: Historia, förhistoriska civilisationer.",
      "Medelande": "Skicka meddelande till mig",
      "Name":"Ditt namn",
      "Kommentar":"Din kommentar",
      "Skicka":"Skicka kommentar",
      "kontakt":"Kontakta mig:",
      "E-post":" mikaela.johansson87@gmail.com",
      "Telefon":"073 659 39 14",
      "Plats":"Stockholm, Sweden",

    }
  }
};

// Initiera i18next
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'sv', // Standard språk
    fallbackLng: 'en', // Fallback språk
    interpolation: {
      escapeValue: false // React skyddar redan mot XSS
    }
  });

export default i18n;



