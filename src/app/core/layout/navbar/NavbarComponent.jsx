import { Container, Nav, Navbar } from "react-bootstrap";

import "./navbarComponent.scss";
import NavbarIcone from "../navbarIcon/NavbarIcon";

const NavbarComponent = () => {
  let isConnected = true;
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
          <NavbarIcone name="PASSION MANGAS" path="/" />
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
