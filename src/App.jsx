import "./App.css";
import { useEffect, useState } from "react";
import { getArticles } from "./server";
import { Header } from "./Header";
import { AllArticles } from "./AllArticles";
import { Routes, Route } from "react-router-dom";
import { SingleArticleView } from "./SingleArticleView";
import { Topics } from "./Topics";

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
      <Routes>
        <Route path="/" element={<AllArticles articles={articles} />} />
        <Route
          path="article/:id"
          element={<SingleArticleView articles={articles} />}
        />
        <Route path="topics" element={<Topics articles={articles} />} />
      </Routes>
    </>
  );
}

export default App;
