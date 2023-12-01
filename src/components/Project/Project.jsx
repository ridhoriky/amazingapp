import React from 'react';
import styles from './Project.module.css';
import imageGofilm from '../../images/gofilm.png';
import imageTastyBites from '../../images/tastybites.png';
import imageEasyRent from '../../images/easyRent.png';

const Portfolio = () => {
  const portoDesc = [
    {
      id: 1,
      title: 'GoFilm',
      description:
        'A film website is an online platform designed for showcasing and exploring a curated collection of movies. The website offers a visually appealing and user-friendly interface, allowing film enthusiasts to explore and appreciate a diverse selection of cinematic works.',
      tech: ['Vite', 'React', 'TailwindCss', 'Firebase'],
      img: imageGofilm,
      link: 'https://go-film-six.vercel.app/',
      github: 'https://github.com/ridhoriky/GoFilm',
    },
    {
      id: 2,
      title: 'Tasty Bites',
      description:
        'A recipe discovery platform is a digital space where users can explore and find a wide array of delightful recipes for various cuisines and occasions. The platform offers an intuitive interface for searching and categorizing recipes, making it easy for users to discover and savor new culinary delights.',
      tech: ['Vite', 'React', 'TailwindCss'],
      img: imageTastyBites,
      link: 'https://tasty-bites-nu.vercel.app/',
      github: 'https://github.com/ridhoriky/Tasty-Bites',
    },
    {
      id: 3,
      title: 'EasyRent',
      description:
        'A car rental platform is a digital space where users can explore and discover a diverse range of vehicles for various purposes and occasions. The platform provides an intuitive interface for searching and categorizing rental options, simplifying the process for users to find and enjoy the perfect vehicle for their needs.',
      tech: ['Vite', 'React', 'SCSS'],
      img: imageEasyRent,
      link: 'https://github.com/ridhoriky/',
      github: 'https://github.com/mwww/EasyRent',
    },
  ];
  return (
    <div className="container">
      <div name="project" className="title">
        - Project
      </div>
      <p className={styles.subTitle}>
        All project are either forked and initiated by me on github
      </p>
      <div className={styles.containerCard}>
        {portoDesc.map((project, index) => {
          return (
            <div
              key={index}
              className={
                index % 2
                  ? [styles.card, styles.reverse].join(' ')
                  : styles.card
              }>
              <img src={project.img} alt={project.title} />
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
                  <a
                    className={styles.btnCode}
                    target="_blank"
                    rel="noreferrer"
                    href={project.github}>
                    Code
                  </a>
                  <a
                    className={styles.btnLiveDemo}
                    target="_blank"
                    rel="noreferrer"
                    href={project.link}>
                    Live Demo
                  </a>
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
