// Central API helper - update API_BASE_URL to your backend's
// ALB DNS name / domain once deployed on AWS.
const API_BASE_URL = "your ALB url";

function getToken() {
  return localStorage.getItem('token');
}

function setToken(token) {
  localStorage.setItem('token', token);
}

function clearToken() {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
}

async function apiRequest(endpoint, { method = 'GET', body = null, isFormData = false } = {}) {
  const headers = {};
  const token = getToken();
  if (token) headers['Authorization'] = `Bearer ${token}`;
  if (!isFormData) headers['Content-Type'] = 'application/json';

  const options = { method, headers };
  if (body) options.body = isFormData ? body : JSON.stringify(body);

  const res = await fetch(`${API_BASE_URL}${endpoint}`, options);

  if (res.status === 401 || res.status === 403) {
    clearToken();
    window.location.href = 'login.html';
    return;
  }

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(data.message || `Request failed with status ${res.status}`);
  }
  return data;
}

const API = {
  login: (username, password) => apiRequest('/auth/login', { method: 'POST', body: { username, password } }),
  me: () => apiRequest('/auth/me'),

  getEmployees: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return apiRequest(`/employees${query ? `?${query}` : ''}`);
  },
  getEmployee: (id) => apiRequest(`/employees/${id}`),
  createEmployee: (formData) => apiRequest('/employees', { method: 'POST', body: formData, isFormData: true }),
  updateEmployee: (id, formData) => apiRequest(`/employees/${id}`, { method: 'PUT', body: formData, isFormData: true }),
  deleteEmployee: (id) => apiRequest(`/employees/${id}`, { method: 'DELETE' }),
  getStats: () => apiRequest('/employees/stats')
};
