import React from 'react';
import styles from '../styles/Projects.module.scss';
import Project1 from './Project1';
import Project2 from './Project2';
import Project3 from './Project3';
import Project4 from './Project4';
import Project5 from './Project5';
import Project6 from './Project6';
import { useScroll } from './useScroll';
import { motion } from 'framer-motion';
import { itemAppear } from './Animation';
import Project7 from './Project7';

function Projects() {
  const [element, controls] = useScroll();

  return (
    <div className={styles.container} id="projects">
      <motion.div
        className={styles.titles}
        variants={itemAppear}
        initial="hidden"
        animate={controls}
        ref={element}
      >
        <h3 className={styles.titles_sub}>PROJECTS</h3>
        <h1>Let us get straight into the work I have done</h1>
      </motion.div>
      <div className={styles.projects}>
        <Project7/>
        <Project5 />
        <Project6 />
        <Project2 />
        <Project3 />
        <Project4 />
        <Project1 />

      </div>
    </div>
  );
}

export default Projects;
