const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

async function request(endpoint, options = {}) {
    try {
        const response = await fetch(`${API_BASE_URL}/api${endpoint}`, {
            credentials: 'include',
            ...options,
        });
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'API request failed');
        }
        return response.json();
    } catch (error) {
        console.error(`API Error: ${error.message}`);
        throw error;
    }
}

export const getFeedbacks = () => request('/feedback');
export const submitFeedback = (data) => request('/feedback', { method: 'POST', body: JSON.stringify(data) });
export const askAI = (question) => request('/ask', { method: 'POST', body: JSON.stringify({ question }) });
