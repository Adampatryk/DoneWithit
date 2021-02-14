import client from "./client";

const endpoint = "/listings";

const getListings = async () => {
  const response = await client.get(endpoint);
  return response;
};

export default {
  getListings,
};
