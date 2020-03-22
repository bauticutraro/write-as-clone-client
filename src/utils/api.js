import Axios from 'axios';

const PORT = 5000;

export default async (url, method = 'GET', data = null, headers = {}) => {
  try {
    const res = await Axios({
      url,
      method,
      data,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        ...headers
      }
    });
    return res.data;
  } catch (err) {
    return err;
  }
};
