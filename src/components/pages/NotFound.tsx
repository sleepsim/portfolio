import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div>
      <h1>Oops! You seem to be lost.</h1>
      <p>Here are some helpful links:</p>
      <Link to="/">Home</Link>
      <Link to="/abouot">Blog</Link>
      <Link to="/project">Contact</Link>
    </div>
  );
};
