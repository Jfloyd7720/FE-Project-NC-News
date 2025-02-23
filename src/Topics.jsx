import { useState } from "react";
import { newsAPI } from "./server";
import { Link } from "react-router";

export const Topics = ({ articles }) => {
  const [topicsData, setTopicsData] = useState([]);
  newsAPI.get("/topics").then((topics) => {
    setTopicsData(topics.data);
  });
  return (
    <div className="topics">
      <h1>Topics</h1>
      <h2>Choose from the list of topics below</h2>
      <div className="topics-list">
        {topicsData.map((topic) => {
          return (
            <div className="topic-card" key={topic.slug}>
              <Link to={`/topics/${topic.slug}`} className="topic-link">
                <h3 className="topic-title">{topic.slug}</h3>
              </Link>
              <p className="topic-description">{topic.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
