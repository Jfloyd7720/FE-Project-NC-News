import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export const Topic = ({ articles }) => {
  const { topic } = useParams();

  // Filter articles that match the topic
  const filteredArticles = articles.filter(
    (article) => article.topic === topic
  );

  return (
    <div className="topic-container">
      {filteredArticles.length === 0 ? (
        <p>No articles available for this topic.</p>
      ) : (
        filteredArticles.map((article) => (
          <div className="article-card" key={article.article_id}>
            <Link
              to={`/article/${article.article_id}`}
              className="article-link"
            >
              <h3 className="article-title">
                {article.topic}: {article.title}
              </h3>
            </Link>
            <img
              className="article-image"
              src={article.article_img_url}
              alt={`${article.title} image`}
            />
            <div className="article-votes">
              <h4>{article.votes} Likes</h4>
            </div>
            <h6 className="article-author">Posted By: {article.author}</h6>
          </div>
        ))
      )}
    </div>
  );
};
