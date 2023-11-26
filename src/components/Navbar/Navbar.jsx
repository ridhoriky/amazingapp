// Navbar.jsx
import React, { useState, useEffect } from 'react';
import { BiMenu, BiX } from 'react-icons/bi';
import logo from '../../images/logo.png';
import styles from './Navbar.module.css';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const changeActiveSection = () => {
    const sections = ['home', 'about', 'portfolio', 'blog', 'contact'];
    const scrollPosition = window.scrollY + 200;

    for (const section of sections) {
      const target = document.getElementById(section);
      if (target) {
        const offsetTop = target.offsetTop;
        const offsetBottom = offsetTop + target.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          setActiveSection(section);
          break;
        }
      }
    }
  };

  useEffect(() => {
    const changeShadow = () => {
      if (window.scrollY >= 80) {
        setScroll(true);
      } else {
        setScroll(false);
      }

      changeActiveSection();
    };
    window.addEventListener('scroll', changeShadow);

    return () => {
      window.removeEventListener('scroll', changeShadow);
    };
  }, []);

  const links = [
    { id: 1, link: 'home' },
    { id: 2, link: 'about' },
    { id: 3, link: 'portfolio' },
    { id: 4, link: 'blog' },
    { id: 5, link: 'contact' },
  ];

  return (
    <div
      className={
        scroll ? [styles.container, styles.scroll].join(' ') : styles.container
      }>
      <div className={styles.nav}>
        <a className={styles.navLogo} href="/">
          <img src={logo} alt="Logo" />
          <p>
            Ridho<span>dev</span>.
          </p>
        </a>
        <ul className={styles.navItems}>
          {links.map(({ id, link }) => (
            <Link
              key={id}
              className={
                link === activeSection
                  ? [styles.menu, styles.activeLink].join(' ')
                  : styles.menu
              }
              to={link}
              smooth
              duration={500}
              activeClass={styles.activeLink}
              spy
              offset={-80}
              onSetActive={() => setActiveSection(link)}>
              {link}
            </Link>
          ))}
        </ul>
        <div onClick={() => setNav(!nav)} className={styles.mobileBtn}>
          {nav ? <BiX size={32} /> : <BiMenu size={32} />}
        </div>
      </div>
      <div
        className={
          nav
            ? [styles.barItemsMobile, styles.active].join(' ')
            : styles.barItemsMobile
        }>
        {links.map(({ id, link }) => (
          <Link
            key={id}
            className={
              link === activeSection
                ? [styles.menu, styles.activeLink].join(' ')
                : styles.menu
            }
            to={link}
            smooth
            duration={500}
            activeClass={styles.activeLink}
            spy
            offset={-80}
            onClick={() => setNav(!nav)}
            onSetActive={() => setActiveSection(link)}>
            {link}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
