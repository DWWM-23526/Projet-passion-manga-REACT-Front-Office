import { Container } from "react-bootstrap";
import Routing from "./Routes";
import NavbarComponent from "./layout/navbar/NavbarComponent";
import Footer from "./layout/footer/Footer";

function App() {
  return (
    <>
      <NavbarComponent />
      <Container>
        <main>
          <Routing />
        </main>
      </Container>
      <Footer />
    </>
  );
}

export default App;
