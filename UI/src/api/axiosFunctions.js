import axios1 from "./axios1";

export const triggerGet = async (url) =>
  await axios1.get(`${url}`, {
    headers: {
      "Content-Type": "application/json", // Example of another header
      Accept: "*/*",
      "ngrok-skip-browser-warning": "true",
    },
  });

export const triggerPost = async (url, postData) =>
  await axios1.post(`${url}`, postData, {
    headers: {
      "Content-Type": "application/json", // Example of another header
      Accept: "*/*",
      "ngrok-skip-browser-warning": "true",
    },
  });
