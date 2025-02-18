import axios from "axios";
export const newsAPI = axios.create({
  baseURL: "https://northcoders-news-api-4aqk.onrender.com/api",
});

export const getArticles = () => {
  return newsAPI.get("/articles").then(({ data }) => {
    return data;
  });
};

export const incVotes = (id) => {
  console.log(id);
  return newsAPI.patch(`articles/${id}`, { inc_votes: 1 }).then((data) => {
    console.log(data);
    return data;
  });
};
