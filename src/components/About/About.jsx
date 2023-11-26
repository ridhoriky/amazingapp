import React from 'react';
import styles from './About.module.css';
import {
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoTailwindCss,
  BiLogoJavascript,
  BiLogoBootstrap,
  BiLogoGithub,
  BiLogoReact,
  BiLogoNodejs,
} from 'react-icons/bi';
import { Link } from 'react-scroll';

const About = () => {
  return (
    <div className="container" name="about">
      <div className={styles.row}>
        <div className={styles.skills}>
          <h1 className="title">- Skills</h1>
          <h2>
            A list of my core <span>skills</span> & <span>tools</span>
          </h2>
          <div className={styles.techIcons}>
            <div className={styles.tech}>
              -<BiLogoHtml5 size="36" />
              <span>HTML</span>
            </div>
            <div className={styles.tech}>
              -<BiLogoCss3 size="36" />
              <span>CSS</span>
            </div>
            <div className={styles.tech}>
              -<BiLogoJavascript size="36" />
              <span>Javascript</span>
            </div>
            <div className={styles.tech}>
              -<BiLogoBootstrap size="36" />
              <span>Bootstrap</span>
            </div>
            <div className={styles.tech}>
              -<BiLogoTailwindCss size="36" />
              <span>Tailwind</span>
            </div>
            <div className={styles.tech}>
              -<BiLogoGithub size="36" />
              <span>GitHub</span>
            </div>
            <div className={styles.tech}>
              -<BiLogoReact size="36" />
              <span>React</span>
            </div>
            <div className={styles.tech}>
              -<BiLogoNodejs size="36" />
              <span>Node JS</span>
            </div>
          </div>
        </div>
        <div className={styles.aboutText}>
          <h1 className="title">- About</h1>
          <h2>
            Riky <span>Ridho</span> Pangestu
          </h2>
          <p>
            I'm a dedicated front-end developer hailing from the beautiful
            islands of Indonesia. Currently on an exciting journey as a student
            pursuing a Bachelor's degree in System Information, I am passionate
            about leveraging technology to create meaningful and visually
            engaging web experiences.
          </p>
          <div className={styles.btn}>
            <Link type="button" to="contact" className={styles.btnHireMe}>
              Hire Me
            </Link>
            <Link type="button" to="#" className={styles.btnDownloadCV}>
              Download CV
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
