import { useState } from "react";
import { newsAPI } from "./server";
import { Link } from "react-router";

export const Topics = ({ articles }) => {
  const [topicsData, setTopicsData] = useState([]);
  newsAPI.get("/topics").then((topics) => {
    console.log(topics);
    setTopicsData(topics.data);
  });
  return (
    <div className="topics">
      <h1>Topics</h1>
      <h2>choose from the lsit of topics below</h2>
      {topicsData.map((topic) => {
        return (
          <div>
            <Link to={`/topics/${topic.slug}`}>
              <h3>{topic.slug} </h3>
            </Link>
            <p>{topic.description}</p>
          </div>
        );
      })}
    </div>
  );
};
