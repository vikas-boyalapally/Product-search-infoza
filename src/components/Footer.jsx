function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-container footer-content">
        <div>
          <h3>ProductHub</h3>

          <p>
            A modern product search application built with
            React, Bootstrap and a public REST API.
          </p>
        </div>

        <div className="footer-meta">
          <span>React</span>
          <span>Bootstrap</span>
          <span>Axios</span>
          <span>REST API</span>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="page-container">
          © 2026 ProductHub. Built for the InfozaTech internship.
        </div>
      </div>
    </footer>
  );
}

export default Footer;