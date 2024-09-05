import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import NavbarIcone from "./NavbarIcon";
import { useApp } from "../../hooks/useApp";
import { useState } from "react";
import ModalNotification from "../../../shared/components/Modal/ModalNotification";

const NavBar = () => {
  const { isAuthenticated, user, logout } = useApp();
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleLogout = () => {
    logout();
    setModalMessage("Déconnecté avec succès !");
    setShowModal(true);
  };

  let profilPart;
  let navPart;

  if (isAuthenticated && user) {
    let profileName = user.name;

    profilPart = (
      <Nav>
        <NavbarIcone name="Profil" path={`/profil/${profileName}`} />
        <Link
          onClick={handleLogout}
          className="nav-Link fs-4 fw-bold m-2 mb-auto"
          to="/"
        >
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
      <Navbar expand="lg" className="">
        <Container fluid className="d-flex">
          <Navbar.Brand as={Link} to="/" className="fs-2 fw-bold">
            PASSION MANGAS
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavbarIcone name="Mangas" path="/manga" />
              <NavbarIcone name="Mangakas" path="/mangaka" />
              <NavbarIcone name="Genres" path="/tags" />
              {navPart}
            </Nav>
            {profilPart}
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <ModalNotification
        show={showModal}
        title="Déconnexion"
        onHide={() => setShowModal(false)}
        message={modalMessage}
      />
    </>
  );
};

export default NavBar;
