import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { newsAPI } from "./server";
import { CommentSection } from "./CommentSectiom";

export const SingleArticleView = () => {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    newsAPI.get(`articles/${id}`).then((res) => {
      setData(res.data.data[0]);
    }, []);
  });
  return (
    <div className="main-article-container">
      <form className="searchBar" action="">
        <input type="text" placeholder="Search for article" />
        <button>Search</button>
      </form>
      <div>
        <h2>
          {data.topic}: {data.title}
        </h2>
        <img src={data.article_img_url} alt="" />
        <div className="likes">
          <h4>{data.votes} Likes </h4>
          <button>Like</button>
        </div>
        <p>{data.body}</p>
        <CommentSection id={{ id }} />
      </div>
    </div>
  );
};
