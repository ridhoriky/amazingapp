import React, { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import logo from "../../images/logo.png";
import styles from "./Navbar.module.css";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scroll, setScroll] = useState(false);

  const changeShadow = () => {
    if (window.scrollY >= 80) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener("scroll", changeShadow);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "blog",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div
      className={
        scroll ? [styles.container, styles.scroll].join(" ") : styles.container
      }
    >
      <div className={styles.nav}>
        <a className={styles.navLogo} href="/">
          <img src={logo} alt="Logo" />
          <p>
            Ridho<span>dev</span>.
          </p>
        </a>
        <ul className={styles.navItems}>
          {links.map(({ id, link }) => (
            <li key={id}>
              <Link to={link} smooth duration={500}>
                {link}.
              </Link>
            </li>
          ))}
        </ul>
        <div onClick={() => setNav(!nav)} className={styles.mobileBtn}>
          {nav ? <BiX size={32} /> : <BiMenu size={32} />}
        </div>
      </div>
      <div
        className={
          nav
            ? [styles.barItemsMobile, styles.active].join(" ")
            : styles.barItemsMobile
        }
      >
        {links.map(({ id, link }) => (
          <li key={id}>
            <Link
              to={link}
              smooth
              duration={500}
              onClick={
                nav
                  ? styles.barItemsMobile
                  : [styles.barItemsMobile, styles.active].join(" ")
              }
            >
              {link}.
            </Link>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
