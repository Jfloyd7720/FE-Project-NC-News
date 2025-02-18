import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { newsAPI } from "./server";

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
        <p>{data.body}</p>
        <div>
          <p>this is a comment</p>
          <button>Like</button>
          <button>Reply to Comment</button>
        </div>
        <div>
          <p>this is a comment</p>
          <button>Like</button>
          <button>Reply to Comment</button>
        </div>
        <div>
          <p>this is a comment</p>
          <button>Like</button>
          <button>Reply to Comment</button>
        </div>
        <div>
          <p>this is a comment</p>
          <button>Like</button>
          <button>Reply to Comment</button>
        </div>

        <form className="add-comment" action="">
          <input type="text" placeholder="Write a commennt here" />
          <button>Add Comment</button>
        </form>
      </div>
    </div>
  );
};
