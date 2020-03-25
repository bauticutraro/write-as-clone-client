import api from '../../utils/api';

export const register = data => api('user/register', 'POST', data);
export const login = data => api('user/login', 'POST', data);
