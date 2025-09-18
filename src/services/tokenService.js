// src/services/tokenService.js

/**
 * ----------------------------------------------------------------
 * 🚨 IMPORTANT: MOCK TOKEN SERVICE FOR DEVELOPMENT ONLY 🚨
 * ----------------------------------------------------------------
 * This file simulates fetching an authentication token from a backend server.
 * In a real production application, you MUST replace this with a secure call
 * to your own server, which generates tokens using the 100ms Management SDK.
 *
 * Why? Hardcoding tokens is insecure and they expire. Your server can generate
 * fresh, user-specific tokens on demand.
 *
 * For now, we will use a temporary token from the 100ms Dashboard to get started.
 */

// 👇 PASTE YOUR TEMPORARY AUTH TOKEN FROM THE 100MS DASHBOARD HERE 👇
const TEMP_AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZXJzaW9uIjoyLCJ0eXBlIjoiYXBwIiwiYXBwX2RhdGEiOm51bGwsImFjY2Vzc19rZXkiOiI2OGNhZTUzMTE0NWNiNGU4NDQ5YjBmYzkiLCJyb2xlIjoiZ3Vlc3QiLCJyb29tX2lkIjoiNjhjYWVmY2ZhNDhjYTYxYzQ2NDc5ZmZiIiwidXNlcl9pZCI6ImE5MzAxNzAxLTQxNmQtNGEwYi04MmQwLWE3MDU4MDJlZGRiZSIsImV4cCI6MTc1ODIxNjU1NCwianRpIjoiZmZiYzM2MmMtMzE3NS00Y2VkLTk0N2QtMWNmNWE2YTI4YWU2IiwiaWF0IjoxNzU4MTMwMTU0LCJpc3MiOiI2OGNhZTUzMTE0NWNiNGU4NDQ5YjBmYzciLCJuYmYiOjE3NTgxMzAxNTQsInN1YiI6ImFwaSJ9.D4BmBOwVS5uIeQtnbw5IzHXdWt9RVRumHK4rAKACV-8';

/**
 * A mock function to simulate fetching a token.
 * @param {string} username - The name of the user joining the room.
 * @param {string} roomId - The ID of the 100ms room.
 * @returns {Promise<string>} A promise that resolves with the authentication token.
 */
export const getToken = async (username, roomId) => {
  // Log the request for debugging purposes.
  console.log(`Requesting token for user: ${username} in room: ${roomId}`);

  // Check if a temporary token has been pasted.
  if (TEMP_AUTH_TOKEN === 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZXJzaW9uIjoyLCJ0eXBlIjoiYXBwIiwiYXBwX2RhdGEiOm51bGwsImFjY2Vzc19rZXkiOiI2OGNhZTUzMTE0NWNiNGU4NDQ5YjBmYzkiLCJyb2xlIjoiZ3Vlc3QiLCJyb29tX2lkIjoiNjhjYWVmY2ZhNDhjYTYxYzQ2NDc5ZmZiIiwidXNlcl9pZCI6ImE5MzAxNzAxLTQxNmQtNGEwYi04MmQwLWE3MDU4MDJlZGRiZSIsImV4cCI6MTc1ODIxNjU1NCwianRpIjoiZmZiYzM2MmMtMzE3NS00Y2VkLTk0N2QtMWNmNWE2YTI4YWU2IiwiaWF0IjoxNzU4MTMwMTU0LCJpc3MiOiI2OGNhZTUzMTE0NWNiNGU4NDQ5YjBmYzciLCJuYmYiOjE3NTgxMzAxNTQsInN1YiI6ImFwaSJ9.D4BmBOwVS5uIeQtnbw5IzHXdWt9RVRumHK4rAKACV-8' || !TEMP_AUTH_TOKEN) {
    // If no token is provided, throw an error to prevent the app from crashing silently.
    const errorMessage = 'Authentication Error: No temporary token provided in tokenService.js. Please get one from the 100ms Dashboard.';
    alert(errorMessage); // Show an alert to the user.
    throw new Error(errorMessage);
  }

  // In a real app, you would make a `fetch` request to your server here.
  // For now, we simulate a successful network request with a short delay.
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('Returning temporary token.');
      resolve(TEMP_AUTH_TOKEN);
    }, 500); // 500ms delay to simulate network latency.
  });
};