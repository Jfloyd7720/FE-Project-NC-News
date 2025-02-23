import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router";

export const AllArticles = ({ articles }) => {
  const [sortedArticles, setSortedArticles] = useState(articles);
  useEffect(() => {
    setSortedArticles(articles);
  }, [articles]);

  const sortArticles = (criteria) => {
    let sortedArray = [...articles];

    if (criteria === "date") {
      sortedArray.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      );
    } else if (criteria === "comments") {
      sortedArray.sort((a, b) => b.comment_count - a.comment_count);
    } else if (criteria === "votes") {
      sortedArray.sort((a, b) => b.votes - a.votes);
    }

    setSortedArticles(sortedArray);
  };

  return (
    <div>
      <div>
        <select
          onChange={(e) => {
            sortArticles(e.target.value);
          }}
        >
          <option value="date">Sort by Date</option>
          <option value="comments">Sort by Comment Count</option>
          <option value="votes">Sort by Votes</option>
        </select>
      </div>
      <div className="a-container">
        {sortedArticles.map((article) => {
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
        })}
      </div>
    </div>
  );
};
