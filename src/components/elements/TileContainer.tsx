import { ProjectTile } from "./ProjectTile";
import ProjectsJson from "../../data/projects.json";

let ProjectInfo: {
  id: string;
  title: string;
  lang: string;
  description: string;
  image: string;
  featured: boolean;
  category: string;
}[] = [];

ProjectsJson.forEach((item) => {
  ProjectInfo.push(item);
});

interface Props {
  category: string;
}

// Load the projects depending on category, load all if selected
const LoadProjects2 = (category: string) => {
  if (category == "all") {
    return ProjectInfo.map((project) => (
      <div className="col col-lg-4">
        <ProjectTile
          id={project.id}
          title={project.title}
          lang={project.lang}
          description={project.description}
          image={project.image}
        />
      </div>
    ));
  } else {
    return ProjectInfo.filter((project) => project.category == category).map(
      (project) => (
        <>
          <div className="col col-lg-4">
            <ProjectTile
              id={project.id}
              title={project.title}
              lang={project.lang}
              description={project.description}
              image={project.image}
            />
          </div>
        </>
      )
    );
  }
};

const TileContainer = ({ category }: Props) => {
  return (
    <div className="container p-3">
      <h2 className="mb-3 fs-3 fw-bold text-orange">{category} projects</h2>
      <div className="row justify-content-center no-wrap my-3">
        {LoadProjects2(category)}
      </div>
    </div>
  );
};

export { TileContainer };
