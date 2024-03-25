import axios from "axios";

const API_KEY = "akcMO9JFi4NhVgdsx5hBiP7qOb7eMFxgMLnh8gsjiAw";
axios.defaults.baseURL = "https://api.unsplash.com";
axios.defaults.params = {
  orientation: "landscape",
  per_page: 20,
};

export const getPhotos = async (query, page) => {
  const { data } = await axios.get(
    `search/photos/?client_id=${API_KEY}&query=${query}&page=${page}`
  );

  return data;
};