import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// export const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-sm navbar-dark">
//       <div className="collapse navbar-collapse">
//         <ul className="navbar-nav ms-auto me-5">
//           <li className="nav-item">
//             <Link className="nav-link" to="/">
//               Home
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/about">
//               About
//             </Link>
//           </li>
//           <li>
//             <Link className="nav-link" to="/projects">
//               Projects
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

export const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  return (
    <>
      <nav
        className={
          "navbar navbar-expand-lg navbar-dark p-3 sticky-top " +
          (scroll ? "bg-color2 nav-shadow" : "bg-color")
        }
      >
        <div className="container-fluid">
          <div className="collapse navbar-collapse d-lg-flex">
            <a
              className="navbar-brand me-5 col-4 cedarville-cursive fs-1"
              href="#"
            >
              p.a.
            </a>
            <div className="col-4"></div>
            <div className="navigation-animate">
              <ul className="navbar-nav col-4 justify-content-lg-start">
                <li className="nav-item mx-3">
                  <Link className="nav-link" to="/">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <i className="bi bi-house" aria-hidden="true"></i>
                  </Link>
                </li>
                <li className="nav-item mx-3">
                  <Link className="nav-link" to="/about">
                    About
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </Link>
                </li>
                <li className="nav-item mx-3">
                  <Link className="nav-link" to="/#projects">
                    Projects
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </Link>
                </li>
                <li className="nav-item mx-3">
                  <Link className="nav-link" to="/resume">
                    Resume
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </Link>
                </li>
                <li className="nav-item mx-3">
                  <Link className="nav-link" to="/contact">
                    Contact
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
