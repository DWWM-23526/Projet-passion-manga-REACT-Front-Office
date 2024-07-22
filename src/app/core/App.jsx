import { Container } from "react-bootstrap";
import Routing from "./Routes";

function App() {
  return (
    <>
      <Container fluid className="d-flex">
        <main>
          <Routing />
        </main>
      </Container>
    </>
  );
}

export default App;
