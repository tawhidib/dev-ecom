import axios from "axios";

const productAPI = axios.create({
  baseURL: process.env.baseURL,
});

export default productAPI;
