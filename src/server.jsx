import axios from "axios";
export const newsAPI = axios.create({
  baseURL: "https://northcoders-news-api-4aqk.onrender.com/api",
});

export const getArticles = () => {
  return newsAPI.get("/articles").then(({ data }) => {
    return data;
  });
};
