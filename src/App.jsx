import "./App.css";
import { useEffect, useState } from "react";
import { getArticles } from "./server";
import { Header } from "./Header";
import { Articles } from "./Article";

function App() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    getArticles().then((data) => {
      console.log(data);
      setArticles(data);
    });
  }, []);
  if (!articles.length) {
    return (
      <>
        <Header />
        <div className="loading-screen">
          <p>Loading... please wait up to 30 seconds</p>
        </div>
        ;
      </>
    );
  }
  return (
    <>
      <Header />
      <div>
        {articles.map((article) => {
          return (
            <Articles
              key={article.article_id}
              article_id={article.article_id}
              article_img={article.article_img_url}
              author={article.author}
              topic={article.topic}
              title={article.title}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
