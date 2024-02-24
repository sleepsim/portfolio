export const Jumbotron = () => {
  return (
    <>
      <div className="p-5 mb-4 bg-dark rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold text-orange">pocholo andres</h1>
          <p className="col-md-8 fs-4 text-w">
            Using a series of utilities, you can create this jumbotron, just
            like the one in previous versions of Bootstrap. Check out the
            examples below for how you can remix and restyle it to your liking.
          </p>
          <div className="animated-button-purple">Example button</div>
          <div className="animated-button-purple no-padding">
            <a href="projects.html">
              <span>
                View All Projects<i className="bi bi-chevron-right"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
