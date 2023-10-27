import React from "react";
import styles from "./Portfolio.module.css";
import { Link } from "react-scroll";
import img from "../../images/about_img.jpg";

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      title: "Shopedia",
      description: "lorem fjdsg dkfnsjdkf dfkngskn fdkjgkfdng iaf sjos",
      tech: ["React", "Tailwind"],
      link: "/shopedia",
    },
    {
      id: 2,
      title: "Shopedia",
      description:
        "lorem fjdsg dkfnsjdkf dfkngskn fdkjgkfdng iaf sjoslorem fjdsg dkfnsjdkf dfkngskn fdkjgkfdng iaf sjoslorem fjdsg dkfnsjdkf dfkngskn fdkjgkfdng iaf sjos",
      tech: ["React", "Tailwind"],
      link: "/shopedia",
      github: "/ridhoriky",
    },
    {
      id: 3,
      title: "Shopedia",
      description: "lorem ipdum doloe sir amer",
      tech: ["React", "Tailwind"],
      link: "/shopedia",
      github: "/ridhoriky",
    },
  ];
  return (
    <div className="container">
      <div name="portfolio" className="title">
        - Project
      </div>
      <p className={styles.subTitle}>
        All project are either forked and initiated by me on github
      </p>
      <div className={styles.containerCard}>
        {portfolio.map((project, index) => {
          return (
            <div
              key={index}
              className={
                index % 2
                  ? [styles.card, styles.reverse].join(" ")
                  : styles.card
              }
            >
              <img src={img} alt={portfolio.title} />
              <div className={styles.projectDetails}>
                <div className={styles.title}>
                  <h2>{project.title}</h2>
                </div>
                <div className={styles.techStacks}>
                  {project.tech.map((tech, index) => {
                    return (
                      <div key={index} className={styles.stack}>
                        {tech}
                      </div>
                    );
                  })}
                </div>
                <p className={styles.desc}>{project.description}</p>
                <div className={styles.btn}>
                  <Link className={styles.btnCode} to={project.github}>
                    Code
                  </Link>
                  <Link className={styles.btnLiveDemo} to={project.link}>
                    Live Demo
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
