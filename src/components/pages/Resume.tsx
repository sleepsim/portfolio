import { Link } from "react-router-dom";

export const Resume = () => {
  return (
    <div className="p-3">
      <div className="row py-5">
        <p className="mb-0">what I've been doing, or</p>
        <p className="fw-bold text-orange fs-1 mb-0">my resume</p>
        <p className="fw-bold text-purple fs-1">and previous work experience</p>
        <p className="mb-5">
          pdf version available:{" "}
          <a
            href="../src/assets/resume-redacted.pdf"
            className="orange-link-hover"
          >
            here
          </a>
        </p>
        <div className="animated-button-orange mb-5">
          <Link to="/contact">
            <span className="">
              get in touch<i className="bi bi-chevron-right"></i>
            </span>
          </Link>
        </div>
        <p className="fw-bold fs-3">Previous Work Experience</p>

        <div className="row">
          <p className="fs-4">Simon Fraser University I.T. Services Surrey</p>
          <p>I.T. Lab Technician</p>
          <ul className="ms-4 col disc-ul">
            <li>
              Managed and serviced audiovisual systems to ensure optimal
              functionality and performance.
            </li>
            <li>
              Handled setup and maintenance of both Windows and Mac computers,
              maintaining operational efficiency and adherence to organizational
              standards.
            </li>
            <li>
              Provided comprehensive servicing for printers, resolving issues
              promptly.
            </li>
            <li>
              Offered general tech support, addressing a wide range of technical
              issues and inquiries to facilitate smooth operations for students
              and staff.
            </li>
          </ul>
          <div className="col"></div>
        </div>

        <div className="row">
          <p className="fs-4">B.C. Cancer Research Centre</p>
          <p>I.T. Technician</p>
          <ul className="ms-4 col disc-ul">
            <li>
              Proficiently managed a network infrastructure comprising 200+
              computers, user accounts, and email systems utilizing Microsoft
              Active Directory.
            </li>
            <li>
              Demonstrated expertise in assembling, servicing, and maintaining
              computer hardware, including proficient management of network
              drops.
            </li>
            <li>
              Skilled in the setup and configuration of new computers, ensuring
              seamless integration into the domain environment by installing
              prerequisite software.
            </li>
            <li>
              Possess specialized knowledge in data recovery procedures, adept
              at retrieving critical information from malfunctioning or failing
              hard drives.
            </li>
          </ul>
          <div className="col"></div>
        </div>

        <p className="fw-bold fs-3">Education</p>
        <p className="fs-4">Simon Fraser University</p>
        <p>Interactive Arts & Technology, BSc.</p>
        <p className="ms-4">2020 - Present</p>

        <p className="fw-bold fs-3">Other Work Experience</p>
        <p className="fs-4">Speeder Indoor Go-Kart</p>
        <p>Pit Crew/Marshal</p>
        <p className="ms-4">2018 - 2020</p>

        <p className="fs-4">Earls Kitchen and Bar</p>
        <p>Line Cook</p>
      </div>

      <div className="animated-button-orange my-3">
        <Link to="/">
          <span className="">
            return home<i className="bi bi-chevron-right"></i>
          </span>
        </Link>
      </div>
    </div>
  );
};
