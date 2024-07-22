import { Container } from "react-bootstrap";
import Routing from "./Routes";
import Footer from "./layout/footer/Footer";

function App() {
  return (
    <>
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
