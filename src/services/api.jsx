import axios from "axios";

// Membaca URL backend dari Vercel Environment Variable. Jika tidak ada, gunakan localhost.
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const predictText = async (text) => {
  // Mengirim request POST ke ${API_BASE_URL}/predict
  const response = await api.post("/predict", { text });
  return response.data;
};

export default api;