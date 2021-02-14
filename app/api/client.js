import { create } from "apisauce";

// define the api
const apiClient = create({
  baseURL: "http://192.168.0.68:9000/api",
});

export default apiClient;
