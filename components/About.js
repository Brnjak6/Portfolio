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
        <h1>I am Stjepan Brnjak, Tech & Sales</h1>
        <p>
          I’m an ambitious sales professional with a strong background in
          customer service and a good understanding of IT. Over the years, I’ve
          developed excellent communication skills and a problem-solving
          approach that helps me understand client needs and deliver on them. I
          also have a Higher Diploma in Software Development, which gives me a
          solid technical base to work with. Combining this with my sales
          experience, I’m excited to take on new opportunities in the tech
          industry and use my skills to make a real impact.
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
