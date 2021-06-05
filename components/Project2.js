import React from "react";
import styles from "../styles/Projects.module.scss";
import ReactSvg from "../public/react.svg";
import Javascript from "../public/javascript.svg";
import Html from "../public/html-5.svg";
import Css from "../public/css.svg";

function Project2() {
  return (
    <div className={styles.project_one}>
      <div className={styles.project_title}>
        <h3 className={styles.titles_sub}>FilmVerse</h3>
        Discover new movies
      </div>
      <div className={styles.first} style={{ flexDirection: "row-reverse" }}>
        <div className={styles.first_left}>
          <div className={styles.first_left_box}>
            <img src="/secondproject.png" alt="" />
          </div>
        </div>
        <div className={styles.first_right}>
          <div className={styles.bullet_points}>
            <li>ReactJS project with functional components</li>
            <li>Dynamic content fetched from TMDB's API</li>
            <li>Displaying trending and popular movies</li>
            <li>Displaying reviews and most popular video</li>
            <li>Working with React npm packages</li>
            <li>Styled with Styled Components</li>
            <li>Responsive across all devices</li>

            <li>Implementing pagination, theme switching, etc...</li>
          </div>
        </div>
      </div>
      <div
        className={styles.bottom_elements}
        style={{ flexDirection: "row-reverse" }}
      >
        <div className={styles.button_links}>
          <button>
            <a href="https://film-verse-react.netlify.app/" target="_blank">
              Demo
            </a>
          </button>
          <button>
            <a href="https://github.com/Brnjak6/MovieTrends" target="_blank">
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

export default Project2;
