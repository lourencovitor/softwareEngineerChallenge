import axios from "axios";

const codes = [413, 401, 409, 400, 403, 404, 500];

const validateStatus = (status) =>
  (status >= 200 && status < 300) || codes.includes(status);

const backendClient = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  validateStatus,
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

backendClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error(error.message);
    throw new Error(error.message);
  }
);

backendClient.interceptors.request.use();

export { backendClient };
