import { Container, Nav, Navbar } from "react-bootstrap";
import NavbarIcone from "./navbarIcon/NavbarIcon";
import { Link } from "react-router-dom";


const NavbarComponent = () => {
  let isConnected = true;
  let profileID = 5;
  let profilPart;
  let navPart

  if (isConnected) {
    profilPart = (
      <Nav>
        <NavbarIcone name="Profil" path={`/profil/${profileID}`} />
        <NavbarIcone name="Déconnexion" path="/profil/logout" />
      </Nav>
    );
    navPart =(
      <NavbarIcone name="Favoris" path="/favorites" />
    );
    
    
  } else {
    profilPart = (
      <Nav>
        <NavbarIcone name="Connexion" path="/profil/login" />
      </Nav>
    );
    navPart =(
     <></>
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
            {navPart}
          </Nav>
          {profilPart}
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
