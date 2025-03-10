import { Jumbotron } from "../elements/Jumbotron";
import { TileContainer } from "../elements/TileContainer";

const Home = () => {
  return (
    <>
      <Jumbotron />
      <section id="projects">
        <TileContainer category="code" />
        <TileContainer category="design" />
        {/* <TileContainer category="game-dev" /> */}
      </section>
    </>
  );
};

export { Home };
