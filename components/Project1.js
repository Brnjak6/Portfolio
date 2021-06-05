import React from "react";
import styles from "../styles/Projects.module.scss";
import ReactSvg from "../public/react.svg";
import Javascript from "../public/javascript.svg";
import Html from "../public/html-5.svg";
import Css from "../public/css.svg";

function Project1() {
  return (
    <div className={styles.project_one}>
      <div className={styles.project_title}>
        <h3 className={styles.titles_sub}>Widicy</h3>
        E-commerce website
      </div>
      <div className={styles.first}>
        <div className={styles.first_left}>
          <div className={styles.first_left_box}>
            <img src="/firstproject.png" alt="" />
          </div>
        </div>
        <div className={styles.first_right}>
          <div className={styles.bullet_points}>
            <li>ReactJS project with functional components</li>
            <li>Dynamic website with Etsy's open API data</li>
            <li>Over 60 million items available to search</li>
            <li>Implementation of React hooks</li>
            <li>ES6 features and npm packages</li>
            <li>Styled with Styled Components</li>
            <li>Responsive across all devices</li>
            <li>Pagination, search filtering, framer motion and more</li>
          </div>
        </div>
      </div>
      <div className={styles.bottom_elements}>
        <div className={styles.button_links}>
          <button>
            <a href="https://widicy-e-commerce.netlify.app/" target="_blank">
              Demo
            </a>
          </button>
          <button>
            <a href="https://github.com/Brnjak6/eMerch" target="_blank">
              Source
            </a>
          </button>
        </div>
        <div className={styles.technologies}>
          <Html className={styles.svgs} />
          <Css className={styles.svgs} />
          <Javascript className={styles.svgs} />
          <ReactSvg className={styles.svgs} />
        </div>
      </div>
    </div>
  );
}

export default Project1;
