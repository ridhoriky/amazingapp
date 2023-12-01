import React from 'react';
import { Link } from 'react-scroll';
import styles from './Hero.module.css';
import profile from '../../images/profile.png';
import {
  BiLogoInstagram,
  BiLogoGithub,
  BiLogoLinkedinSquare,
  BiLogoMedium,
  BiLogoYoutube,
} from 'react-icons/bi';

const Hero = () => {
  const socialLink = [
    {
      id: 1,
      title: 'GitHub',
      href: 'https://github.com/ridhoriky',
      logo: BiLogoGithub,
    },
    {
      id: 2,
      title: 'Instagram',
      href: 'mailto:manricofadli@gmail.com',
      logo: BiLogoInstagram,
    },
    {
      id: 3,
      title: 'Medium',
      href: 'https://medium.com/@ridhoriky25',
      logo: BiLogoMedium,
    },
    {
      id: 4,
      title: 'LinkedIn',
      href: 'https://www.linkedin.com/in/rikyridhopangestu',
      logo: BiLogoLinkedinSquare,
    },
    {
      id: 5,
      title: 'Youtube',
      href: 'https://www.youtube.com/channel/UCLubFr3LpQ4slZPFv6bIU0g',
      logo: BiLogoYoutube,
    },
  ];
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
        <Link to="project" className={styles.btnProject} smooth duration={500}>
          See Project
        </Link>
      </div>
      <div className={styles.picture}>
        <img src={profile} alt="profile" />
      </div>
      <div className={styles.socialMedia}>
        <p>Follow Me:</p>
        <div className={styles.socialIcons}>
          {socialLink.map((items) => (
            <a href={items.href} target="_blank" rel="noreferrer">
              <items.logo size="28" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
