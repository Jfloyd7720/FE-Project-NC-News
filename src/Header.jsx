import { Link } from "react-router";

export const Header = () => {
  return (
    <header>
      <h1>NC News</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="article/34">Search</Link>
        <Link to="topics">Topics</Link>
      </nav>
    </header>
  );
};
