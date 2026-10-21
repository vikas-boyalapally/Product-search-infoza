function Navbar({ productCount }) {
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">
          Product<span>Hub</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="mainNavbar"
        >
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Products
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>

            <li className="nav-item ms-lg-3">
              <span className="badge text-bg-dark">
                {productCount} Products
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;