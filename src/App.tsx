// Modules
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/index.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.js";

// Components
import { Navbar } from "./components/elements/Navbar";
import { Sidebar } from "./components/elements/Sidebar";
import { Footer } from "./components/elements/Footer";

// Pages
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { Projects } from "./components/pages/Projects";
import { NotFound } from "./components/pages/NotFound";
import { Resume } from "./components/pages/Resume";
import { Contact } from "./components/pages/Contact";
import ScrollToTop from "./components/elements/ScrollToTop";

function App() {
  return (
    <>
      <Sidebar />
      <Navbar />

      <div className="container">
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects/">
            <Route path=":id" element={<Projects />}></Route>
            <Route index element={<NotFound />}></Route>
          </Route>
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
