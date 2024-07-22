import { Container, Nav, Navbar } from "react-bootstrap";

const NavbarComponent = () => {
  let isConnected = false;
  let profileID = 5;
  let navPart;

  if (isConnected) {
    navPart = (
      <Nav>
        <Nav.Link className="fs-4 fw-bold" href={`/passion-manga/profiles/${profileID}`}>Profile</Nav.Link>
        <Nav.Link className="fs-4 fw-bold" href="/passion-manga/">Deconnexion</Nav.Link>
      </Nav>
    );
  } else {
    navPart = (
      <Nav>
        <Nav.Link className="fs-4 fw-bold" href="/passion-manga/profiles/login">Connexion</Nav.Link>
      </Nav>
    );
  }

  return (
    <>
      <Navbar>
        <Container fluid className="d-flex">
          <Navbar.Brand className="fs-2 fw-bold" href="/passion-manga/">PASSION MANGAS</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="fs-4 fw-bold" href="/passion-manga/manga">Manga</Nav.Link>
              <Nav.Link className="fs-4 fw-bold" href="/passion-manga/mangaka">Mangaka</Nav.Link>
              <Nav.Link className="fs-4 fw-bold" href="/passion-manga/tags">Genres</Nav.Link>
            </Nav>
            {navPart}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
