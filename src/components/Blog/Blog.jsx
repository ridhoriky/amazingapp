import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import styles from "./Blog.module.css";
import img from "./../../images/about_img.jpg";

const Blog = () => {
  return (
    <div className="container" name="blog">
      <h1 className="title">- Blog</h1>
      <p className={styles.subTitle}>
        I have written various articles aimed at providing guidance, tips, and
        inspiration to readers on similar learning journeys. These articles
        strive to convey complex concepts clearly and motivate readers to
        continue to grow.
      </p>
      <div className={styles.containerBox}>
        <Swiper
          slidesPerView={1}
          spaceBetween={100}
          loop={true}
          loopedSlidesLimit={false}
          modules={[Navigation]}
          className={styles.swiper}
          navigation={{ nextEl: ".next", prevEl: ".prev" }}
          breakpoints={{
            1200: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
          }}
        >
          <SwiperSlide className={styles.swiperSlide}>
            <img src={img} alt="" />
            <h2>Blog 1</h2>
            <span>21 Novermber 2023</span>
            <p>Topic : </p>
            <a className={styles.btnRead} href="/" target="_blank">
              Read Article
            </a>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <img src={img} alt="" />
            <h2>Blog 2</h2>
            <span>21 Novermber 2023</span>
            <p>Topic : </p>
            <a className={styles.btnRead} href="/" target="_blank">
              Read Article
            </a>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <img src={img} alt="" />
            <h2>Blog 3</h2>
            <span>21 Novermber 2023</span>
            <p>Topic : </p>
            <a className={styles.btnRead} href="/" target="_blank">
              Read Article
            </a>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <img src={img} alt="" />
            <h2>Blog 4</h2>
            <span>21 Novermber 2023</span>
            <p>Topic : </p>
            <a className={styles.btnRead} href="/" target="_blank">
              Read Article
            </a>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <img src={img} alt="" />
            <h2>Blog 5</h2>
            <span>21 Novermber 2023</span>
            <p>Topic : </p>
            <a className={styles.btnRead} href="/" target="_blank">
              Read Article
            </a>
          </SwiperSlide>
        </Swiper>
        <div className={styles.btn}>
          <span className="prev">Prev</span>
          <span className="next">Next</span>
        </div>
      </div>
    </div>
  );
};

export default Blog;
