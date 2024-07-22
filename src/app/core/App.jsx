import { Container } from "react-bootstrap";
import Routing from "./Routes";
import NavbarComponent from "./layout/navbar/NavbarComponent";

function App() {
  return (
    <>
      <NavbarComponent />
      <Container>
        <main>
          <Routing />
        </main>
      </Container>
    </>
  );
}

export default App;
