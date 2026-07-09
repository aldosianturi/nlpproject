import axios from "axios";

// 1. Cek apakah project sedang berjalan di komputer lokal (localhost)
const isLocalhost = 
  window.location.hostname === "localhost" || 
  window.location.hostname === "127.0.0.1";

// 2. Tentukan BASE URL berdasarkan environment secara otomatis
// Jika ada Env Variable VITE_API_URL, pakai itu. 
// Jika di lokal, pakai localhost:8000. Jika di production Vercel, pakai root URL production-mu.
const API_BASE_URL = import.meta.env.VITE_API_URL || (isLocalhost ? "http://127.0.0.1:8000" : "https://nlpproject-weld.vercel.app");

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