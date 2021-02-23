import { create } from "apisauce";
import cache from "../utility/cache";

// define the api
const apiClient = create({
  baseURL: "http://192.168.0.68:9000/api",
});

const get = apiClient.get;

apiClient.get = async (url, params, axiosConfig) => {
  //Before
  const response = await get(url, params, axiosConfig);
  //After
  if (response.ok) {
    //Store in cache
    cache.store(url, response.data);
    return response;
  } else {
    const data = await cache.get(url);
    return data ? { ok: true, data } : response;
  }
};

export default apiClient;
