const API_BASE_URL = import.meta.env.VITE_API_URL || "/api";

/**
 * A standardized fetch utility wrapper for the frontend.
 *
 * @param {string} endpoint - The API endpoint starting with a slash (e.g., '/users')
 * @param {RequestInit} options - Fetch options (method, headers, body, etc.)
 * @returns {Promise<any>}
 */
export const apiFetch = async (endpoint, options = {}) => {
  // If in development, VITE_API_URL might be empty so it falls back to the Vite proxy ('/api')
  const url = `${API_BASE_URL}${endpoint}`;

  const defaultHeaders = {
    "Content-Type": "application/json",
  };

  const config = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  };

  const response = await fetch(url, config);
  if (!response.ok) {
    throw new Error(`API error: ${response.status} ${response.statusText}`);
  }

  return response.json();
};
