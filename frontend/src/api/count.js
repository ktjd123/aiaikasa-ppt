import axios from 'axios';

export const get = () => axios.get('/api/v1/count/');
export const next = () => axios.get('/api/v1/count/next');
export const pre = () => axios.get('/api/v1/count/pre');
