import { Container } from "react-bootstrap";
import Routing from "./Routes";
import Navbar from "./layout/navbar/Navbar";

function App() {
  return (
    <>
      <Container fluid className="d-flex">
        <Navbar />
        <main>
          <Routing />
        </main>
      </Container>
    </>
  );
}

export default App;
