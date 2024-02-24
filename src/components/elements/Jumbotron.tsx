const Languages: string[] = [
  "HTML/CSS + SASS",
  "JavaScript/Typescript",
  "Python",
  "PHP, SQL",
];
const Libraries: string[] = ["React", "Bootstrap 5", "Node.js"];
const Design: string[] = ["Figma", "Ilustrator", "Premiere Pro"];

function GenerateList(arr: string[], title: string) {
  return (
    <>
      <p className="fs-6 fw-bold">{title}:</p>
      <ul className="ps-3">
        {arr.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
}

export const Jumbotron = () => {
  return (
    <>
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
            <div className="animated-button-purple">
              <a href="#projects">
                <span className="fw-bold">
                  View All Projects<i className="bi bi-chevron-right"></i>
                </span>
              </a>
            </div>
          </div>
          <div className="col-4 py-5"></div>
        </div>

        <div className="row">
          <p className="fw-bold fs-5 text-orange">i've worked with</p>
          <div className="col-3">{GenerateList(Languages, "languages")}</div>
          <div className="col-3">
            {GenerateList(Libraries, "libraries/frameworks")}
          </div>
          <div className="col-3">{GenerateList(Design, "Design Tools")}</div>
        </div>
      </div>
    </>
  );
};
