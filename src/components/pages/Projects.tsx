import { Link, useParams } from "react-router-dom";
import ProjectsJson from "../../data/projects.json";
import { NotFound } from "./NotFound";
import { Carousel } from "../elements/Carousel";

let ProjectInfo: {
  id: string;
  title: string;
  lang: string;
  description: string;
  image: string;
  github: string;
  featured: boolean;
  category: string;
  overview: string;
  youtube: string;
}[] = [];

ProjectsJson.forEach((item) => {
  ProjectInfo.push(item);
});

const LoadProject = (input: string | undefined) => {
  return ProjectInfo.filter((project) => project.id === input).map(
    (project) => (
      <div className="p-3">
        <div className="row py-5">
          <h1 className="fw-bold text-orange">{project.title}</h1>
          <div className="col-6 py-4">
            <img
              src={"/assets/" + project.image}
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="col-6 py-4">
            {/* <h1 className="fw-bold text-orange">{project.title}</h1> */}
            <h2 className="fw-bold">Overview</h2>
            <p>{/* <span className="fw-bold">Team:</span> Solo */}</p>
            <p>
              <span className="fw-bold">Technologies: </span>
              {project.lang}
            </p>
            <p className="fw-bold">Overview:</p>
            <p>{project.overview}</p>

            {project.github ? (
              project.github.includes("github") ? (
                <p className="fw-bold">
                  GitHub Repo:{" "}
                  <a
                    href={project.github}
                    className="fw-normal orange-link-hover"
                  >
                    {project.github}
                  </a>
                </p>
              ) : (
                <p className="fw-bold">
                  Site Link:{" "}
                  <a
                    href={project.github}
                    className="fw-normal orange-link-hover"
                  >
                    {project.github}
                  </a>
                </p>
              )
            ) : null}
          </div>
        </div>

        <div className="container d-flex flex-column align-items-center py-5">
          <p className="fw-bold fs-2 text-purple">Video Demo</p>
          {project.youtube ? (
            project.youtube.includes("youtube") ? (
              <iframe
                width="800"
                height="450"
                src={project.youtube}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
              ></iframe>
            ) : project.youtube.includes("slideshow") ? (
              <Carousel />
            ) : (
              <img
                src={project.youtube}
                className="img-fluid w-75"
                alt="gif demo"
              />
            )
          ) : (
            <p>Sorry no video demo yet!</p>
          )}

          <div className="animated-button-purple my-5">
            <Link to="/">
              <span className="fw-bold">
                return home<i className="bi bi-chevron-right"></i>
              </span>
            </Link>
          </div>
        </div>
      </div>
    )
  );
};

const CheckProject = (name: string | undefined) => {
  const finder = ProjectInfo.find((item) => item.id === name);

  if (finder) {
    return LoadProject(name);
  } else {
    return <NotFound />;
  }
};

const Projects = () => {
  const { id } = useParams();

  return <>{CheckProject(id)}</>;
};

export { Projects };
