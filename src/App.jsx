// App.jsx
import React from 'react';
import ProgressBar from './Components/ProgressBar'; // Kontrollera sökvägen
import './App.css';
import styles from './portfolio.module.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import animationData from './assets/animation1.json';
import animationData2 from './assets/animation2.json';
import Lottie from 'lottie-react';



function App() {


  return (
    <div>
       
      <section className={styles.header}>
      <img className={styles.imgPort} src="/img/jag_a.png" alt="jag" width={400}  />

        
        <div>
          <h1>
            <span className={styles.name}>Mikaela</span> Johansson 
          </h1>
          <h3>Frontend-utvecklare / söker LIA</h3>
          <br />
          <p className={styles.headerText}>
            Jag studerar till frontend-utvecklare med inriktning mot webbsäkerhet jag 
            har i min utbildning fått kunskaper inom både frontend- och backend-utveckling. 
            Jag kan utveckla användargränssnitt med HTML, CSS, JavaScript och React.
            <br />
            <br />
            På backend-sidan har jag erfarenhet av databaser och serverhantering med 
            Node.js, Express, samt SQL och NoSQL-databaser. 
            Jag har även utbildning i 
            webbsäkerhet och kan skydda mot vanliga hot som XSS,  CSRF och SQL-injektioner.
            <br />
            <br />
            Jag är självgående och strävar efter att förbättra min 
            kodningshastighet och effektivitet, och ser varje dag som en ny möjlighet att lära mig mer om den ständigt utvecklande webbutvecklingsvärlden.
          </p>
        </div>
      </section>

      <br />

      <div className={styles.skills}>
        <div className={styles.container}>
          <div className={styles.leftSide}>
            <div className={styles.progressItem}>
              <ProgressBar percentage={65} width={400} height={100} />
              <ul className={styles.ul}>
                <li className={styles.liSkills}><img src='/img/html.png' alt="HTML" width={20} className={styles.imgLog} />HTML</li>
                <li className={styles.liSkills}><img src='/img/css.png' alt="CSS" width={25} className={styles.imgLog} />CSS</li>
                <li className={styles.liSkills}><img src='/img/bootstrap.png' alt="Bootstrap" width={27} className={styles.imgLog} />Bootstrap</li>
              </ul>
            </div>
            <div className={styles.progressItem}>
              <ProgressBar percentage={60} width={400} height={100} />
              <ul className={styles.ul}>
                <li className={styles.liSkills}><img src='/img/gitGit.png' alt="Git" width={50} className={styles.imgLog} />git</li>
                <li className={styles.liSkills}><img src='/img/github.png' alt="GitHub" width={30} className={styles.imgLog} />GitHub</li>
                <li className={styles.liSkills}><img src='/img/figma.png' alt="Figma" width={23} className={styles.imgLog} />Figma</li>
              </ul>
            </div>
          </div>


          <div className={styles.animationSkill}>
            <h1>Färdigheter</h1>
            <Lottie 
              animationData={animationData} 
              loop={true} 
              autoplay={true} 
              
            />
          </div>



          <div className={styles.rightSide}>
            <div className={styles.progressItem}>
              <ProgressBar percentage={60} width={400} height={100} />
              <ul className={styles.ul}>
                <li className={styles.liSkills}><img src='/img/react.png' alt="React" width={20} className={styles.imgLog} />React</li>
                <li className={styles.liSkills}><img src='/img/api.png' alt="API" width={25} className={styles.imgLog} />API</li>
                <li className={styles.liSkills}><img src='/img/js.png' alt="JavaScript" width={23} className={styles.imgLog} />JavaScript</li>
              </ul>
            </div>
            <div className={styles.progressItem}>
              <ProgressBar percentage={50} width={400} height={100} />
              <ul className={styles.ul}>
                <li className={styles.liSkills}><img src='/img/sql.png' alt="SQL" width={20} className={styles.imgLog} />SQL</li>
                <li className={styles.liSkills}><img src='/img/js.png' alt="Express" width={20} className={styles.imgLog} />Express</li>
                <li className={styles.liSkills}><img src='/img/node.js.png' alt="Node.js" width={30} className={styles.imgLog} />Node.js</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <br />

      <section className={styles.about}>
        <img className={styles.imgRelaxt} src="/img/jag.png" alt="jag" />
        <p>
          Ålder: 37 <br />
          Bor: Stockholm. <br />
          Familj: Sambo, 3 hundar. <br />
          Intressen: Historia, gamla civilisationer.
        </p>     
      </section>


      <section className={styles.skillsEx}>
        <h2>Ett av mina projekt</h2>
        <br />
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
          <a 
            className={styles.buttonLink} 
            href="https://github.com/MikaelaJohansson/react-chat-app.git" 
            target="_blank" 
            rel="noopener noreferrer" // För säkerhet, skyddar mot relaterade säkerhetsproblem
          >
            GitHub
          </a>
          <a 
            className={styles.buttonLink} 
            href="https://snackis.netlify.app" 
            target="_blank" 
            rel="noopener noreferrer" // För säkerhet, skyddar mot relaterade säkerhetsproblem
          >
            Hemsidan
          </a>
        </div>
      </section>

      <div className={styles.vog} >
       <button>Skriv till mig</button>
      </div>
      <br />
      <br />
      <hr></hr>
      <footer className={styles.contactfooter} >
        <ul> 
          <li className={styles.contact}>Kontakta mig:</li>
          <li className={styles.contact}>E-post: mikaela.johansson@gmail.com</li>
          <li className={styles.contact}>Telefon: 073 659 39 14</li>
          <li className={styles.contact}>Plats: Stockholm,Sweden</li>
        </ul>
        <div className={styles.contactfooterIcon}>
          {/* GitHub ikon och länk */}
          <a href="https://github.com/MikaelaJohansson" target="_blank" rel="noopener noreferrer">
            <FaGithub size={50} />
          </a>         
          <a href="https://linkedin.com/in/mikaela-johansson-6a59b82a5" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={50} />
          </a>
        </div>
      </footer>
    </div>
    
  );
  
}

export default App;






