import React from "react";
import { Link } from "react-scroll";
import styles from "./Hero.module.css";
import profile from "../../images/profile.png";
import {
  BiLogoInstagram,
  BiLogoGithub,
  BiLogoLinkedinSquare,
  BiLogoMedium,
  BiLogoYoutube,
} from "react-icons/bi";

const Hero = () => {
  return (
    <div className={styles.container} name="home">
      <div className={styles.heading}>
        <h2>
          Hi, I am <span>Ridho</span>.
        </h2>
        <h1>Web Developer</h1>
        <p>
          A self-taught front-end developer who specializes in building
          exceptional digital experience.
        </p>
        <Link
          to="portfolio"
          className={styles.btnProject}
          smooth
          duration={500}
        >
          See Project
        </Link>
      </div>
      <div className={styles.picture}>
        <img src={profile} alt="profile" />
      </div>
      <div className={styles.socialMedia}>
        <p>Follow Me:</p>
        <div className={styles.socialIcons}>
          <a href="/" target="_blank">
            <BiLogoGithub size="28" />
          </a>
          <a href="/" target="_blank">
            <BiLogoLinkedinSquare size="28" />
          </a>
          <a href="/" target="_blank">
            <BiLogoMedium size="28" />
          </a>
          <a href="/" target="_blank">
            <BiLogoInstagram size="28" />
          </a>
          <a href="/" target="_blank">
            {" "}
            <BiLogoYoutube size="28" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
