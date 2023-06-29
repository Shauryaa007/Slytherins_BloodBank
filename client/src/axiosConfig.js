import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:9000", // Set your API base URL
  withCredentials: true, // Include cookies in requests
});

export default instance;
