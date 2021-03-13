import client from "./client";

const endpoint = "/messages";

const send = (message, listingId) => {
  return client.post(endpoint, { message, listingId });
};

export default { send };
