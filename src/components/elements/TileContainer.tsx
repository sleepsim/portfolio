import { ProjectTile } from "./ProjectTile";
import projectsJson from "../../data/projects.json";

let info2: {
  id: string;
  title: string;
  description: string;
  image: string;
  featured: boolean;
}[] = [];

projectsJson.forEach((item) => {
  info2.push(item);
});

export const TileContainer = () => {
  return (
    <div className="container">
      <h2>Featured Projects</h2>
      <div className="row justify-content-center">
        {info2.map((item) =>
          item.featured ? (
            <div className="col col-lg-4">
              <ProjectTile
                id={item.id}
                title={item.title}
                description={item.description}
                image={item.image}
              />
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};
