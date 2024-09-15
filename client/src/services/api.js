import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';

const login = async (email, password) => {
    const response = await axios.post(`${API_BASE_URL}/login`, { email, password });
    return response.data;
};

const register = async (email, password) => {
    const response = await axios.post(`${API_BASE_URL}/register`, { email, password });
    return response.data;
};



export { login, register }