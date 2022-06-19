import React from 'react';
import styles from '../styles/About.module.scss';
import GitHub from '../public/github.svg';
import LinkedIn from '../public/linkedin.svg';
import { useScroll } from './useScroll';
import { motion } from 'framer-motion';
import { itemAppear } from './Animation';

function About() {
  const [element, controls] = useScroll();

  return (
    <motion.div
      variants={itemAppear}
      initial="hidden"
      animate={controls}
      ref={element}
      className={styles.container}
      id="about"
    >
      <div className={styles.content}>
        <h3 className={styles.content_sub}>ABOUT ME</h3>
        <h1>I am Stjepan Brnjak, self taught developer located in Dublin.</h1>
        <p>
          While I am mostly self taught, currently I have a pleasure of learning
          more through Higher Diploma in Sofware Development at National College
          of Ireland as a Part-Time student. I am proud of what I have learned
          so far, however even more excited to learn new things!
        </p>
        <div className={styles.links}>
          <div className={styles.svg}>
            <a href="https://github.com/Brnjak6" target="_blank">
              <GitHub className={styles.svg__links} />
            </a>
            <span>Github</span>
          </div>
          <div className={styles.svg}>
            <a
              href="https://www.linkedin.com/in/stjepan-brnjak/"
              target="_blank"
            >
              <LinkedIn className={styles.svg__links} />
            </a>
            <span>LinkedIn</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
