import client from "./client";

const register = (userInfo) => {
  console.log(userInfo);
  return client.post("/users", userInfo);
};

const get = (userId) => {
  return client.get(`/user/${userId}`);
};

export default {
  register,
  get,
};
