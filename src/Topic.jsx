import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router";
import { useParams } from "react-router-dom";

export const Topic = ({ articles }) => {
  const { topic } = useParams();

  return articles.map((article) => {
    if (article.topic == topic) {
      return (
        <div className="all-articles-container" key={article.article_id}>
          <Link to={`/article/${article.article_id}`}>
            <h4>
              {article.topic}: {article.title}
            </h4>
          </Link>
          <img src={article.article_img_url} alt="" />
          <div>
            <h4>{article.votes} Likes</h4>
          </div>
          <h6>Posted By: {article.author}</h6>
        </div>
      );
    }
  });
};
