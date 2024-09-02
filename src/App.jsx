import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProgressBar from './Components/ProgressBar'; // Kontrollera sökvägen
import './App.css';
import styles from './portfolio.module.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import animationData from './assets/animation1.json';
import Lottie from 'lottie-react';
import emailjs from 'emailjs-com'; // Importera EmailJS


function App() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleShowForm = () => {
    setIsFormVisible(true);

  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_0tm1ts1',  // Ersätt med din EmailJS service ID
        'template_6u96c04', // Ersätt med din EmailJS template ID
        { name, comment },  // Data som skickas till e-posten
        'NF2rhePvNYYClVLj_'      // Ersätt med din EmailJS användar-ID
      )
      .then(
        (result) => {
          alert('Meddelande skickat');
          console.log(result.text);
          setIsSent(true);
          setName('');
          setComment('');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  // Framer Motion Variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } } // Mer långsam fade-in
  };
  
  const slideInFromLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 2 } } // Mer långsam slide-in
  };
  
  const slideInFromRight = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 2 } } // Mer långsam slide-in
  };
  
  
  

  return (
    <div className={styles.mainContainer}>

      <section className={styles.header}>
        <img
          className={styles.imgPort}
          src="/img/jag_a.png"
          alt="jag"
          width={300}
        />
        <div>
          <motion.h1
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className={styles.name}>Mikaela</span> Johansson
          </motion.h1>
          <motion.h3
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Frontend-utvecklare / söker LIA
          </motion.h3>
          <br />
          <motion.a
            href="/img/mikaela_johansson_cv.pdf"
            download
            className={styles.cvLank}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Ladda ner mitt CV
          </motion.a>
          <motion.p
            className={styles.headerText}
            variants={slideInFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Jag studerar till frontend-utvecklare med inriktning mot webbsäkerhet <br />
            jag har i min utbildning fått kunskaper inom både frontend- och backend-utveckling. <br />
            Jag kan utveckla användargränssnitt med HTML, CSS, JavaScript och React.
            <br />
            <br />
            På backend-sidan har jag erfarenhet av databaser och serverhantering <br />
            med Node.js, Express, samt SQL och NoSQL-databaser. <br />
            Jag har även utbildning i
            webbsäkerhet och kan skydda mot vanliga hot som <br /> XSS, CSRF och SQL-injektioner.
            <br />
            <br />
            Jag är självgående och strävar efter att förbättra min
            kodningshastighet <br /> och effektivitet, och ser varje dag som en ny möjlighet att lära mig mer <br /> om den ständigt utvecklande webbutvecklingsvärlden.
          </motion.p>
        </div>
      </section>

      <br />

      <div className={styles.skills}>
        <div className={styles.container}>
        <div className={styles.animationSkill}>
            <motion.h1
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
             
            </motion.h1>
            <Lottie
              animationData={animationData}
              loop={true}
              autoplay={true}
            />
          </div>
          
          <div className={styles.leftSide}>
            <motion.div
              variants={slideInFromLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className={styles.skillsH2}> Färdigheter</h2>
              <div className={styles.progressItem}>
                <ProgressBar percentage={65} width={200}  />
                <ul className={styles.ul}>
                  <li className={styles.liSkills}><img src='/img/html.png' alt="HTML" width={20} className={styles.imgLog} />HTML</li>
                  <li className={styles.liSkills}><img src='/img/css.png' alt="CSS" width={20} className={styles.imgLog} />CSS</li>
                  <li className={styles.liSkills}><img src='/img/bootstrap.png' alt="Bootstrap" width={27} className={styles.imgLog} />Bootstrap</li>
                </ul>
              </div>
              <div className={styles.progressItem}>
                <ProgressBar percentage={60} width={200} />
                <ul className={styles.ul}>
                  <li className={styles.liSkills}><img src='/img/gitGit.png' alt="Git" width={39} className={styles.imgLog} />git</li>
                  <li className={styles.liSkills}><img src='/img/github.png' alt="GitHub" width={25} className={styles.imgLog} />GitHub</li>
                  <li className={styles.liSkills}><img src='/img/figma.png' alt="Figma" width={15} className={styles.imgLog} />Figma</li>
                </ul>
              </div>
            </motion.div>
          </div>

     

          <div className={styles.rightSide}>
            <motion.div
              variants={slideInFromRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className={styles.progressItem}>
                <ProgressBar percentage={60} width={200} />
                <ul className={styles.ul}>
                  <li className={styles.liSkills}><img src='/img/react.png' alt="React" width={20} className={styles.imgLog} />React</li>
                  <li className={styles.liSkills}><img src='/img/api.png' alt="API" width={25} className={styles.imgLog} />API</li>
                  <li className={styles.liSkills}><img src='/img/js.png' alt="JavaScript" width={20} className={styles.imgLog} />JavaScript</li>
                </ul>
              </div>
              <div className={styles.progressItem}>
                <ProgressBar percentage={50} width={200} />
                <ul className={styles.ul}>
                  <li className={styles.liSkills}><img src='/img/sql.png' alt="SQL" width={16} className={styles.imgLog} />SQL</li>
                  <li className={styles.liSkills}><img src='/img/js.png' alt="Express" width={20} className={styles.imgLog} />Express</li>
                  <li className={styles.liSkills}><img src='/img/node.js.png' alt="Node.js" width={29} className={styles.imgLog} />Node.js</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <br />

     

      <section className={styles.portfolioContainer}>
        <div className={styles.skillsSnackis}>
          <motion.h2
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Projekt Snackis
          </motion.h2>
          <motion.img
            className={styles.snackis}
            src="/img/snackis.png"
            alt="smakprov"
            width={300}
            variants={slideInFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />
          <br />
          <br />
          <motion.p
            variants={slideInFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Ett av mina projekt som speglar min nuvarande kompetensnivå.
            Projektet är en chattapplikation där användare kan skapa ett konto,
            logga in, skriva och posta meddelanden samt bjuda in andra till chattar.
            Applikationen innehåller: <br /><strong>Vite, API:er, Git/GitHub, lösenordsskyddad, CSRF-Token,
            JWT, Session-/LocalStorage, CSP policy, monitorering av loggar på Sentry,
            Crypto.randomUUID och bilder hostas på freeimage.</strong>
          </motion.p>
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

        <div className={styles.portfolio}>
          <motion.h2
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Portfolio
          </motion.h2>
          <motion.img
            className={styles.portfolioImg}
            src="/img/portfolio.png"
            alt="smakprov"
            width={300}
            variants={slideInFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />
          <br />
          <br />
          <motion.p
            variants={slideInFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            På min portfolio kan du utforska smakprov av projekt <br />
            och läsa mer om mina arbeten.
            Här hittar du även en länk till min GitHub,
            där du kan se källkoden till denna portfolio och andra projekt jag har skapat. <br />
            Besök gärna min GitHub för att få en djupare inblick
            i min kod och utvecklingsprocess.
          </motion.p>
          <br />
          <a
            className={styles.buttonLink}
            href="https://github.com/MikaelaJohansson/portfolio.git"
            target="_blank"
            rel="noopener noreferrer" // För säkerhet, skyddar mot relaterade säkerhetsproblem
          >
            GitHub
          </a>
          <a
            className={styles.buttonLink}
            href="https://mikisportfolio.netlify.app/"
            target="_blank"
            rel="noopener noreferrer" // För säkerhet, skyddar mot relaterade säkerhetsproblem
          >
            Hemsidan
          </a>
        </div>
      </section>

      <section className={styles.about}>
       <div >
        <motion.img
          className={styles.imgRelaxt}
          src="/img/jag.png"
          alt="jag"
          variants={slideInFromLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />
        <motion.p
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
        <p className={styles.aboutText}>
          Ålder: 37 <br />
          Bor: Stockholm. <br />
          Familj: Sambo, 3 hundar. <br />
          Intressen: Historia, förhistoriska civilisationer.
        </p>
        </motion.p>
       </div>
      </section>



      <div className={styles.messageContainer}>
        {!isFormVisible && (
          
          <button onClick={handleShowForm} className={styles.messageButtonStart}>
            Skicka meddelande till mig
          </button>
        )}
        {isFormVisible && (
          <form onSubmit={sendEmail} className={styles.commentForm}>
            {isSent && <p>Tack för din kommentar!</p>}
            <input
              className={styles.messageName}
              type="text"
              placeholder="Ditt namn"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <br />
            <br />
            <textarea
              className={styles.messageInput}
              placeholder="Din kommentar"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            ></textarea>
            <br />
            <button type="submit" className={styles.messageButton}>
              Skicka kommentar
            </button>
          </form>
        )}
      </div>

      <br />
      <br />

      <footer className={styles.contactfooter}>
        <ul>
          <li className={styles.contact}>Kontakta mig:</li>
          <li className={styles.contact}>E-post: mikaela.johansson87@gmail.com</li>
          <li className={styles.contact}>Telefon: 073 659 39 14</li>
          <li className={styles.contact}>Plats: Stockholm, Sweden</li>
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







