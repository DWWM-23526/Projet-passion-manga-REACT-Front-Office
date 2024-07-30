import { Container } from "react-bootstrap";

import Header from "./header/Header";
import Footer from "./Footer/Footer";
import NavBar from "./Navbar/NavBar";
import PropTypes from "prop-types";

const BaseLayout = ({ children }) => {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <NavBar />
        <Header />
        <Container fluid className="flex-fill">
          <main>{children}</main>
        </Container>
        <Footer />
      </div>
    </>
  );
};

BaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BaseLayout;
