import { Link } from "react-router-dom";

export const Contact = () => {
  return (
    <div className="p-3">
      <div className="row py-5">
        <p className="mb-0">ways to</p>
        <p className="fw-bold text-orange fs-1 mb-0">get in touch</p>
        <p>
          the fastest way to reach me is through{" "}
          <a href="mailto:@pandres@sfu.ca" className="orange-link-hover">
            email
          </a>{" "}
          or{" "}
          <a
            href="https://www.linkedin.com/in/pocholo-andres/"
            className="orange-link-hover"
          >
            linkedIn
          </a>
        </p>
        <p>
          my socials are also on the left sidebar if u want to see cool
          animations
        </p>
        <span className="fs-1">&#8592;</span>
        <div className="animated-button-orange my-5">
          <Link to="/">
            <span className="">
              return home<i className="bi bi-chevron-right"></i>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
