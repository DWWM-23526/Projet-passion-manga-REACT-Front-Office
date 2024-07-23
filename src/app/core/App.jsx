import { Container } from "react-bootstrap";
import Routing from "./Routes";
import NavbarComponent from "./layout/NavbarComponent";
import Footer from "./layout/Footer";
import Header from "./layout/header/header";

function App() {
  return (
    <>
      <NavbarComponent />
      <Header/>
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
