import React from "react";
import styles from "../styles/Projects.module.scss";
import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";
import Project4 from "./Project4";

function Projects() {
  return (
    <div className={styles.container} id="projects">
      <div className={styles.titles}>
        <h3 className={styles.titles_sub}>PROJECTS</h3>
        <h1>Let us get straight into work I have done</h1>
      </div>
      <div className={styles.projects}>
        <Project1 />
        <Project2 />
        <Project3 />
        <Project4 />
      </div>
    </div>
  );
}

export default Projects;
