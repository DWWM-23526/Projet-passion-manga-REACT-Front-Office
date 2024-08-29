import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import NavbarIcone from "./NavbarIcon";
import { useApp } from "../../hooks/useApp";
import { useState } from "react";
import ModalLoginLogout from "../../../shared/components/Modal/ModalLoginLogout";

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

      <ModalLoginLogout
        show={showModal}
        onHide={() => setShowModal(false)}
        message={modalMessage}
      />
    </>
  );
};

export default NavBar;
