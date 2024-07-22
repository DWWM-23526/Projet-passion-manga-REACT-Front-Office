const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            PASSION MANGAS
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav w-100 d-flex justify-content-between flex-column flex-lg-row">
              <div className="d-flex flex-column flex-lg-row">
                <li className="nav-item">
                  <a className="nav-link <?= urlIs('/mangas') ? 'isActive' : '' ?>" href="/mangas">
                    Mangas
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link <?= urlIs('/mangakas') ? 'isActive' : '' ?>" href="/mangakas">
                    Mangakas
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link <?= urlIs('/genres') ? 'isActive' : '' ?>" href="/genres">
                    Genres
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
