import axios from 'axios';

const apiKey = process.env.REACT_APP_X_RAPID_API_KEY;
const mediumBaseUrl = process.env.REACT_APP_X_RAPID_API_BASE_URL;
const userId = process.env.REACT_APP_X_RAPID_API_MEDIUM_USER_ID;

const api = axios.create({
  headers: {
    'X-RapidAPI-Key': apiKey,
    'X-RapidAPI-Host': 'medium2.p.rapidapi.com',
  },
});

export const getArticleByUserId = () => {
  return api.get(`${mediumBaseUrl}user/${userId}/articles`);
};

export const getArticleDetails = (articleId) => {
  return api.get(`${mediumBaseUrl}article/${articleId}`);
};
