import Axios from "axios";

import { API_URL } from "@/constants/common";

const axiosInstance = Axios.create({
  baseURL: API_URL,
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});

export default axiosInstance;
