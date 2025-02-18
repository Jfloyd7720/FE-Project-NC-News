import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router";

export const AllArticles = ({ articles }) => {
  return articles.map((article) => {
    return (
      <div className="all-articles-container" key={article.article_id}>
        <Link to={`article/${article.article_id}`}>
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
  });
};
