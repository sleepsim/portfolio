export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="social-icon-animate">
        <ul className="flex-column">
          <li>
            <a className="google" href="mailto:pandres@sfu.ca">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <i className="bi bi-envelope" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a
              className="linkedIn"
              href="https://www.linkedin.com/in/pocholo-andres/"
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <i className="bi bi-linkedin" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a className="github" href="https://github.com/sleepsim">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <i className="bi bi-github" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
