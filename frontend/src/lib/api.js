import axios from 'axios';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE,
  timeout: 60000,
});

export async function summarizeText({ text, mode, sessionId }) {
  const { data } = await api.post('/summarize', { text, mode, sessionId });
  return data;
}

export async function summarizeFile({ file, mode, sessionId }) {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('mode', mode);
  if (sessionId) formData.append('sessionId', sessionId);
  const { data } = await api.post('/summarize/file', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return data;
}

export async function getHistory({ sessionId, page = 1, limit = 10 }) {
  const { data } = await api.get('/history', { params: { sessionId, page, limit } });
  return data;
}

export async function getSummaryById(id) {
  const { data } = await api.get(`/history/${id}`);
  return data;
}

export async function deleteSummary(id) {
  const { data } = await api.delete(`/history/${id}`);
  return data;
}

export async function getAnalytics() {
  const { data } = await api.get('/analytics');
  return data;
}
