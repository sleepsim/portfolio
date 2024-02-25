import { Link, Outlet } from "react-router-dom";

export const ReturnToHome = () => {
  return (
    <>
      <div className="animated-button-purple mb-5">
        <Link to="/">
          <span className="fw-bold">
            Back to home<i className="bi bi-chevron-right"></i>
          </span>
        </Link>
      </div>
      <Outlet />
    </>
  );
};
