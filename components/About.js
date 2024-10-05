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
        <h1>I am Stjepan Brnjak, IT student</h1>
        <p>
          I’m currently pursuing my MSc in Software Design with Cloud Native
          Computing while building on my foundation in technology through a
          Higher Diploma in Software Development at the National College of
          Ireland. My background in sales has equipped me with strong
          communication and problem-solving skills, enabling me to effectively
          understand and meet client needs. I’m excited to combine my technical
          knowledge and customer-oriented approach as I embark on new adventures
          in the tech industry.
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
