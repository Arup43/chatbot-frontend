export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

export const API_ENDPOINTS = {
    REGISTER: `${API_BASE_URL}/auth/register`,
    LOGIN: `${API_BASE_URL}/auth/login`,
    CHAT: `${API_BASE_URL}/api/chat`,
    RATE_LIMIT: `${API_BASE_URL}/api/rate-limit`,
}; 