import api from '../../utils/api';

export const getArticle = () => api('http://localhost:3000');

export const createArticle = data => api('article', 'POST', data);
