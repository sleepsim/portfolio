// Modules
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/index.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// Components
import { Navbar } from "./components/elements/Navbar";
import { Sidebar } from "./components/elements/Sidebar";

// Pages
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { Projects } from "./components/pages/Projects";
import { NotFound } from "./components/pages/NotFound";

function App() {
  return (
    <>
      <Sidebar />
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
