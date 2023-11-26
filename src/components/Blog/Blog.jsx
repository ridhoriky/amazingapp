import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import styles from './Blog.module.css';
import { getArticleDetails, getArticleByUserId } from '../../api/api';

const Blog = () => {
  const [articleList, setArticleList] = useState([]);
  const [articleDetails, setArticleDetails] = useState([]);

  useEffect(() => {
    const fetchArticlesId = async () => {
      try {
        const response = await getArticleByUserId();
        setArticleList(response.data.associated_articles);
      } catch (error) {
        console.error('Error fetching associated articles:', error);
      }
    };

    fetchArticlesId();
  }, []);

  useEffect(() => {
    const fetchArticleDetails = async () => {
      try {
        const detailsData = [];

        await Promise.all(
          articleList.map(async (articleId) => {
            const articleResponse = await getArticleDetails(articleId);
            detailsData.push(articleResponse.data);
          })
        );

        setArticleDetails(detailsData);
      } catch (error) {
        console.error('Error fetching article details:', error);
      }
    };

    if (articleList.length > 0) {
      fetchArticleDetails();
    }
  }, [articleList]);

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
          navigation={{ nextEl: '.next', prevEl: '.prev' }}
          breakpoints={{
            1200: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
          }}>
          {articleDetails.map((article, index) => (
            <SwiperSlide key={index} className={styles.swiperSlide}>
              <img src={article.image_url} alt={article.title} />
              <h2>{article.title}</h2>
              <span>{article.published_at.slice(0, 10)}</span>
              <p>Topic : {article.tags.join(', ')}</p>
              <a
                className={styles.btnRead}
                href={article.url}
                rel="noreferrer"
                target="_blank">
                Read Article
              </a>
            </SwiperSlide>
          ))}
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
