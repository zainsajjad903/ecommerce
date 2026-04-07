const Navbar = () => {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-white shadow-sm px-4 py-3 navbar-custom">
          <div className="container-fluid px-0">
            <a className="navbar-brand" href="index.html">
              <span className="d-flex flex-column text-uppercase text-xs fw-bold lh-sm">
                <span className="" style="letter-spacing: .12rem;">
                  Furnish
                </span>
                <span>Template</span>
              </span>
            </a>

            <div className="mx-auto  d-lg-block d-none">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="index.html"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about.html">
                    About us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="products.html">
                    Products
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="testimonials.html">
                    Testimonials
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link " href="contact.html">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="d-flex align-items-center gap-4">
              <span className="d-flex align-items-center gap-2 fw-bold">
                <span>
                  <i className="bi bi-telephone"></i>
                </span>
                <span>+901234576</span>
              </span>
              <a
                className=""
                data-bs-toggle="offcanvas"
                href="#offcanvasExample"
                role="button"
                aria-controls="offcanvasExample"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-list"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                  />
                </svg>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
export default Navbar;
