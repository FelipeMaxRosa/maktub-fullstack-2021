import api from "../api/api.config";

const getAll = () => {
  return api.get(`/api/character`);
};

const get = (id) => {
  return api.get(`/api/character/${id}`);
};

const create = (data) => {
  return api.post("/api/character", data);
};

const update = (id, data) => {
  return api.put(`/api/character/${id}`, data);
};

const remove = (id) => {
  return api.delete(`/api/character/${id}`);
};

export { get, getAll, create, update, remove };
