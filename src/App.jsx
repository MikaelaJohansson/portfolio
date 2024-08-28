// App.jsx
import React from 'react';
import ProgressBar from './Components/ProgressBar'; // Kontrollera sökvägen
import './App.css';
import styles from './portfolio.module.css';


function App() {
  return (
    <div>
      <section className={styles.header}>
        <img className={styles.imgPort} src="/img/porträt.jpg" alt="jag" width={400} />
        <div>
          <h1>
            <span className={styles.name}>Mikaela</span> Johansson
          </h1>
          <h3>Frontend-utvecklare / söker LIA</h3>
          <br />
          <p>
            Jag studerar till frontend-utvecklare med inriktning mot webbsäkerhet. 
            Under min utbildning har jag fått omfattande kunskaper inom 
            både frontend- och backend-utveckling. Jag har lärt mig att 
            utveckla användargränssnitt med teknologier som HTML, CSS och JavaScript, 
            och jag har specialiserat mig på React, som jag ser fram emot att bli helt 
            flytande i. 
            <br /> 
            <br />
            På backend-sidan har jag erfarenhet av att arbeta med databaser och serverhantering, inklusive teknologier som Node.js och Express, samt hantera SQL och NoSQL-databaser.
            Jag har även fått utbildning i webbsäkerhet, där jag har lärt mig om 
            säkerhetsåtgärder och bästa praxis för att skydda både frontend och backend. Detta inkluderar skydd mot vanliga säkerhetshot som XSS (Cross-Site Scripting), CSRF (Cross-Site Request Forgery), och SQL-injektioner.
            <br />
            <br />
            Jag är mycket självgående och fokuserad på att förbättra min 
            kodningshastighet och -effektivitet. Varje dag ser jag som en ny 
            möjlighet att lära mig mer om den dynamiska och ständigt utvecklande 
            världen av webbutveckling.
          </p>
        </div>
      </section>

      <br />

      <div className={styles.skills}>
        <div className={styles.progressContainer}>
          <div className={styles.progressItem}>
            <ProgressBar percentage={63} width={200} height={200} />
            <ul className={styles.ul}>
              <li><img src='/img/html.png' alt="HTML" width={20} className={styles.imgLog} />HTML</li>
              <li><img src='/img/css.png' alt="HTML" width={25} className={styles.imgLog} />CSS</li>
              <li><img src='/img/bootstrap.png' alt="HTML" width={20} className={styles.imgLog} />Bootstrap</li>
            </ul>
          </div>
          <div className={styles.progressItem}>
            <ProgressBar percentage={54} width={200} height={200} />
            <ul className={styles.ul}>
              <li><img src='/img/gitGit.png' alt="HTML" width={40} className={styles.imgLog} />git</li>
              <li><img src='/img/github.png' alt="HTML" width={23} className={styles.imgLog} />GitHub</li>
              <li><img src='/img/figma.png' alt="HTML" width={23} className={styles.imgLog} />Figma</li>
            </ul>
          </div>
          <div className={styles.progressItem}>
            <ProgressBar percentage={43} width={200} height={200} />
            <ul className={styles.ul}>
              <li><img src='/img/react.png' alt="HTML" width={20} className={styles.imgLog} />React</li>
              <li><img src='/img/api.png' alt="HTML" width={25} className={styles.imgLog} />API</li>
              <li><img src='/img/js.png' alt="HTML" width={23} className={styles.imgLog} />JavaScript</li>
            </ul>
          </div>
          <div className={styles.progressItem}>
            <ProgressBar percentage={39} width={200} height={200} />
            <ul className={styles.ul}>
              <li><img src='/img/sql.png' alt="HTML" width={20} className={styles.imgLog} />SQL</li>
              <li><img src='/img/js.png' alt="HTML" width={20} className={styles.imgLog} />Express</li>
              <li><img src='/img/node.js.png' alt="HTML" width={23} className={styles.imgLog} />Node.js</li>
            </ul>
          </div>
        </div>
      </div>
      <br />

      <h2>Om mig</h2>
      <section className={styles.about}>
        <img className={styles.img} src="/img/jag.png" alt="jag" />
        <p>
          Ålder: 37 <br />
          Bor: Stockholm. <br />
          Familj: Sambo, 3 hundar. <br />
          Intressen: Historia, gamla civilisationer.
        </p>     
      </section>


      <section className={styles.skillsEx}>
        <h2>Ett av mina projekt</h2>
        <div>
          <img className={styles.snackis} src="/img/snackis.png" alt="smakprov" height={240} />
          <br />
          <br />
          <p>
            Ett av mina senaste skolprojekt som speglar min nuvarande 
            kompetensnivå. Projektet är en chattapplikation där användare 
            kan skapa ett konto, logga in, skriva och posta meddelanden samt 
            bjuda in andra till chattar. Applikationen hanterar flera 
            konversationer samtidigt. Användare har även möjlighet att 
            uppdatera sin kontoinformation eller radera sitt konto helt 
            om så önskas.
          </p>
          <br />
          <a className={styles.button} href="https://github.com/MikaelaJohansson/react-chat-app.git" target="_blank" class="button-link">
            GitHub
          </a>
          <a 
            className={styles.button} 
            href="https://snackis.netlify.app" 
            target="_blank" 
            rel="noopener noreferrer" // För säkerhet, skyddar mot relaterade säkerhetsproblem
          >
            Hemsidan
          </a>
        </div>
      </section>

      <footer>
        <h3>kontackta mig</h3>
      </footer>
    </div>
  );
}

export default App;






