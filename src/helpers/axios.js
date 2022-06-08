import axios from "axios";

const instance = axios.create({
  baseURL: "https://picsum.photos/v2"
});

instance.interceptors.response.use(function (response) {
  return response.data;
});

export default instance;