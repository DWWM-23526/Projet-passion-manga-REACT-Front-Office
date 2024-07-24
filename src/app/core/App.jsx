import Routing from "./Routes";
import NavbarComponent from "./layout/NavbarComponent";
import Footer from "./layout/Footer";
import AuthProvider from "./contexts/auth/AuthProvider";

function App() {
  return (
    <>
    
      <AuthProvider>
        <div className="d-flex flex-column min-vh-100">
          <NavbarComponent />
          <div className="flex-fill">
            <main>
              <Routing />
            </main>
          </div>
          <Footer />
        </div>
      </AuthProvider>
    </>
  );
}

export default App;
