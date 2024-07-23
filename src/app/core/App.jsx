import Routing from "./Routes";
import NavbarComponent from "./layout/NavbarComponent";
import Footer from "./layout/Footer";

function App() {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <NavbarComponent />
      <div className="flex-fill">
          <main>
            <Routing />
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
