import React from "react";
import styles from "./Contact.module.css";
import {
  BiMap,
  BiMailSend,
  BiLogoInstagram,
  BiLogoGithub,
  BiLogoLinkedinSquare,
} from "react-icons/bi";

const Contact = () => {
  return (
    <div className="container">
      <div name="contact" className="title">
        - Contact
      </div>
      <div className={styles.contactWrapper}>
        <form id="contact-form" className={styles.fromHorizontal}>
          <h2>Send A Message</h2>
          <div className={styles.formGroup}>
            <input
              type="text"
              className={styles.formControl}
              id="name"
              placeholder="NAME"
              name="name"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <input
              type="email"
              className={styles.formControl}
              id="email"
              placeholder="EMAIL"
              name="email"
              required
            />
          </div>

          <textarea
            className={styles.formControl}
            rows="10"
            placeholder="MESSAGE"
            name="message"
            required
          ></textarea>

          <button
            className={styles.btnSend}
            id="submit"
            type="submit"
            value="SEND"
          >
            Send
          </button>
        </form>

        <div className={styles.contact}>
          <div>
            <h2>Get In Touch</h2>
            <p>
              Whether you want to get in touch, talk about a project
              collaboration, or just say hi, I'd love to hear from you. Simply
              fill the from and send me an email.
            </p>
          </div>
          <ul className={styles.contactList}>
            <li className={styles.listItem}>
              <span className={styles.place}>
                <BiMap size={32} />
                Yogyakarta, Indonesia
              </span>
            </li>

            <li className={styles.listItem}>
              <a
                className={styles.email}
                href="mailto:#"
                title="Send me an email"
              >
                <BiMailSend size={32} />
                ridhoestu.b@gmail.com
              </a>
            </li>
          </ul>

          <ul className={styles.socialMediaList}>
            <li>
              <a href="/" target="_blank" className={styles.contactIcon}>
                <BiLogoGithub size={28} />
              </a>
            </li>
            <li>
              <a href="/" target="_blank" className={styles.contactIcon}>
                <BiLogoInstagram size={28} />
              </a>
            </li>
            <li>
              <a href="/" target="_blank" className={styles.contactIcon}>
                <BiLogoLinkedinSquare size={28} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
