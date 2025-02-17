export const Articles = ({ topic, title, article_id, author, article_img }) => {
  return (
    <div className="all-articles-container" key={article_id}>
      <h4>
        {topic}: {title}
      </h4>

      <img src={article_img} alt="" />
      <h6>Posted By: {author}</h6>
    </div>
  );
};
