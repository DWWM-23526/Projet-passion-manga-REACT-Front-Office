import { Container, Nav, Navbar } from "react-bootstrap";
import NavbarIcone from "./navbarIcon/NavbarIcon";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  let isConnected = false;
  let profileID = 5;
  let navPart;

  if (isConnected) {
    navPart = (
      <Nav>
        <NavbarIcone name="Profile" path={`/profile/${profileID}`} />
        <NavbarIcone name="Deconnexion" path="/logout" />
      </Nav>
    );
  } else {
    navPart = (
      <Nav>
        <NavbarIcone name="Connexion" path="/profile/login" />
      </Nav>
    );
  }

  return (
    <>
      <Navbar>
        <Container fluid className="d-flex">
          <Nav>
            <Link className="nav-Link fs-2 fw-bold mx-2 pt-1" to="/">
              PASSION MANGAS
            </Link>
          </Nav>
          <Nav className="me-auto">
            <NavbarIcone name="Mangas" path="/manga" />
            <NavbarIcone name="Mangakas" path="/mangaka" />
            <NavbarIcone name="Genres" path="/tags" />
          </Nav>
          {navPart}
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
