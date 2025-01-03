import axios from 'axios';

const api = axios.create({
    baseURL: "https://npl-news.onrender.com/auth/"
});

export const googleAuth = (code) => {
    return api.get(`/google?code=${code}`);
};