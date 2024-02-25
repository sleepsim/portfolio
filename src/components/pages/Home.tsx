import { Jumbotron } from "../elements/Jumbotron";
import { TileContainer } from "../elements/TileContainer";

export const Home = () => {
  return (
    <>
      <Jumbotron />
      <section id="projects">
        <TileContainer category="code" />
        <TileContainer category="design" />
      </section>
    </>
  );
};
