import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProgressBar from './Components/ProgressBar'; 
import './App.css';
import styles from './portfolio.module.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import animationData from './assets/animation1.json';
import Lottie from 'lottie-react';
import emailjs from 'emailjs-com'; 
import { useTranslation } from 'react-i18next';




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
        'service_0tm1ts1',  
        'template_6u96c04',
        { name, comment },  
        'NF2rhePvNYYClVLj_'   
      )
      .then(
        (result) => {
          alert(t('alert'));
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


  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } } 
  };
  
  const slideInFromLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 2 } } 
  };
  
  const slideInFromRight = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 2 } } 
  };
  
  
  const { t, i18n } = useTranslation();  

  const handleChangeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };



  return (

    <div className={styles.mainContainer}>
      
      <button  className={styles.translate} onClick={() => handleChangeLanguage('en')}>English</button>
      <button  className={styles.translate} onClick={() => handleChangeLanguage('sv')}>Svenska</button>

      <section className={styles.header}>
        <img
          className={styles.imgPort}
          src="/img/jag_a.png"
          alt="jag"
          width={300}
        />
        <div  className={styles.headerMainText}>
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
              {t('frontend')} 
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
            {t('CV')}
          </motion.a>
          <motion.p
            className={styles.headerText}
            variants={slideInFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="translated-text">
              {t('1')} <br /><br />
              {t('2')} <br /><br />
              {t('3')} <br /><br />
            </div>

            
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
            <h2 className={styles.skillsH2}>
              {t('Färdigheter')} 
            </h2>
            <motion.div
              variants={slideInFromLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              
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
          <br />
          <motion.video 
            controls
            variants={slideInFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <source  src="/img/SnackisVideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </motion.video>
          <br />
          <br />
          <motion.p
            variants={slideInFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {t('4')} <br /> <br />
            {t('5')} 
          </motion.p>
          <br />
          <a
            className={styles.buttonLink}
            href="https://github.com/MikaelaJohansson/react-chat-app.git"
            target="_blank"
            rel="noopener noreferrer" 
          >
            GitHub
          </a>
          <a
            className={styles.buttonLink}
            href="https://snackis.netlify.app"
            target="_blank"
            rel="noopener noreferrer" 
          >
            {t('Hemsida')} 
          </a>
        </div>
        <br />

        <div className={styles.portfolio}>
          <motion.h2
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Portfolio
          </motion.h2>
          <br />
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
             {t('Portfolio')} 
          </motion.p>
          <br />
          <a
            className={styles.buttonLink}
            href="https://github.com/MikaelaJohansson/portfolio.git"
            target="_blank"
            rel="noopener noreferrer" 
          >
            GitHub
          </a>
          <a
            className={styles.buttonLink}
            href="https://mikisportfolio.netlify.app/"
            target="_blank"
            rel="noopener noreferrer" 
          >
            {t('Hemsida')} 
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
            {t('Ålder')} <br />
            {t('Bor')} <br />
            {t('Familj')} <br />
            {t('Intressen')} <br />     
          </p>
          </motion.p>
        </div>
      </section>

      <div className={styles.messageContainer}>
        {!isFormVisible && (
          
          <button onClick={handleShowForm} className={styles.messageButtonStart}>
           {t('Medelande')}
          </button>
        )}
        {isFormVisible && (
          <form onSubmit={sendEmail} className={styles.commentForm}>
            <input
              className={styles.messageName}
              type="text"
              placeholder= {t('Name')} 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <br />
            <br />
            <textarea
              className={styles.messageInput}
              placeholder={t('Kommentar')}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            ></textarea>
            <br />
            <button type="submit" className={styles.messageButton}>
            {t('Skicka')}
            </button>
          </form>
        )}
      </div>

      <br />
      <br />

      <footer className={styles.contactfooter}>
        <ul>
          <li className={styles.contact}>{t('kontakt')}</li>
          <li className={styles.contact}>{t('E-post')}</li>
          <li className={styles.contact}>{t('Plats')}</li>
        </ul>
        <div className={styles.contactfooterIcon}>
          
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







