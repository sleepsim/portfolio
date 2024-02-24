import { Link } from "react-router-dom";

interface Props {
  id: string;
  title: string;
  lang: string;
  description: string;
  image: string;
}

export const ProjectTile = ({ id, title, description, image, lang }: Props) => {
  return (
    <>
      <Link to={"/projects/" + id}>
        <div className="hover hover-1 mx-auto">
          <div className="hover-overlay"></div>
          <div className="hover-1-content hover-padding height-100">
            <p className="hover-1-title my-0">{lang}</p>
            <p className="hover-1-description my-0">
              <em>{description}</em>
            </p>
          </div>
          <img src={image} alt={title} className="img-fluid h-100" />
        </div>
      </Link>
      <p className="mt-2 fs-5">{title}</p>
    </>
  );
};
