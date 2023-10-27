import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className="container">
      <div className={styles.footerWrapper}>
        <hr />© {new Date().getFullYear()} ridhoriky | All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
