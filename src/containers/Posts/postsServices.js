import api from '../../utils/api';

export const getPosts = () => api('https://jsonplaceholder.typicode.com/posts');
