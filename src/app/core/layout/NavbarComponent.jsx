import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";

import AuthContext from "../contexts/auth/AuthContext";
import NavbarIcone from "./navbarIcon/NavbarIcon";

const NavbarComponent = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);

 

  let profileID = 5;
  let profilPart;
  let navPart;

  if (isAuthenticated) {
    profilPart = (
      <Nav>
        <NavbarIcone name="Profil" path={`/profil/${profileID}`} />
        <Link onClick={logout} className="nav-Link fs-4 fw-bold m-2 mb-auto" to="/">
          Déconnexion
        </Link>
      </Nav>
    );
    navPart = <NavbarIcone name="Favoris" path="/favorites" />;
  } else {
    profilPart = (
      <Nav>
        <NavbarIcone name="Connexion" path="/profil/login" />
      </Nav>
    );
    navPart = <></>;
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
            {navPart}
          </Nav>
          {profilPart}
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
