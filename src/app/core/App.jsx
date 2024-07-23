import { Container } from "react-bootstrap";
import Routing from "./Routes";
import NavbarComponent from "./layout/NavbarComponent";
import Footer from "./layout/Footer";

function App() {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <NavbarComponent />
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
