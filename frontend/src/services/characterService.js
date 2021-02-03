import http from "../http/http-common";

const getAll = () => {
  return http.get(`/api/character`);
};

const get = (id) => {
  return http.get(`/api/character/${id}`);
};

const create = (data) => {
  return http.post("/api/character", data);
};

const update = (id, data) => {
  return http.put(`/api/character/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/api/character/${id}`);
};

export { get, getAll, create, update, remove};
