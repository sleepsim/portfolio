import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div>
      <h1 className="mb-5">404? yup that page doesn't exist!</h1>

      <div className="animated-button-purple mb-5">
        <Link to="/">
          <span className="fw-bold">
            Back to home<i className="bi bi-chevron-right"></i>
          </span>
        </Link>
      </div>

      <p>hopefully this page actually does not exist</p>
      <p>
        otherwise, please send me an{" "}
        <a href="mailto:pandres.sfu.ca" className="orange-link-hover">
          email?
        </a>
      </p>
    </div>
  );
};
