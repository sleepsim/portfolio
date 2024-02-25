import { Link, Route } from "react-router-dom";

export const About = () => {
  return (
    <div className="p-3 rounded-3 container sm">
      <div className="row">
        <div className="col-8 py-5">
          <p className="fs-5 mb-0">hello I'm</p>
          <h1 className="fw-bold text-orange">pocholo andres</h1>
          <h1 className="fw-bold text-purple">web dev student</h1>
          <p className="col-md-8 fs-6 text-w mb-4">
            an aspiring web developer currently studying at SFU's Interactive
            Arts and Technology Program. My Focus is on front-end development,
            with additional experience in UX/UI, and Game design
          </p>
          <p className="col-md-8 fs-6 text-w mb-4">
            I'm a huge tech fan and keep up to date with current computer tech.
            I have a lot of experience with computer hardware/software as
            building PCs is a hobby I have on the side. I've also worked in I.T.
            at the B.C. Cancer Reasearch Centre and Simon Fraser University
            Surrey
          </p>
          <p className="col-md-8 fs-6 text-w mb-4">
            I'm a lifelong and diehard fan F1 still waiting for Ferrari's next
            WDC in <s>2017, 2018, 2022</s> 2024 with Leclerc. I grew up playing
            video games and still am an avid gamer where I sometimes draw
            inspiration from.
          </p>

          <p className="fw-bold">
            <span className="fs-3">&#8592;</span> You can find my contact info
            on the left, alternatively view my projects or resume below
          </p>

          <div className="row">
            <div className="animated-button-purple col">
              <a href="/#projects">
                <span className="fw-bold">
                  View All Projects<i className="bi bi-chevron-right"></i>
                </span>
              </a>
            </div>
            <div className="animated-button-orange col">
              <a href="/#projects">
                <span className="fw-bold">
                  View Resume<i className="bi bi-chevron-right"></i>
                </span>
              </a>
            </div>
            <div className="col"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
