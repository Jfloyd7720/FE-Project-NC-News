export const Articles = ({ articles }) => {
  return articles.map((article) => {
    return (
      <div className="all-articles-container" key={article.article_id}>
        <h4>
          {article.topic}: {article.title}
        </h4>

        <img src={article.article_img_url} alt="" />
        <h6>Posted By: {article.author}</h6>
      </div>
    );
  });
};
