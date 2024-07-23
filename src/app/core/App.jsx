import { Container } from "react-bootstrap";
import Routing from "./Routes";
import NavbarComponent from "./layout/NavbarComponent";
import Footer from "./layout/Footer";
import Header from "./layout/header/header";

function App() {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <NavbarComponent />
        <Header/>
      <Container className="flex-fill">
          <main>
            <Routing />
          </main>
        </Container>
        <Footer />
      </div>
    </>
  );
}

export default App;
