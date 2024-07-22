import { Container, Image } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <footer className="text-center text-white bg-primary">
        <Container className="d-flex justify-content-center py-4">
          <a href="#" className="mx-2">
            <Image src="src\assets\img\facebook.svg" />
          </a>
          <a href="#" className="mx-2">
            <Image src="src\assets\img\instagram.svg" />
          </a>
          <a href="#" className="mx-2">
            <Image src="src\assets\img\twitter.svg" />
          </a>
          <a href="#" className="mx-2">
            <Image src="src\assets\img\github.svg" />
          </a>
        </Container>

        <div className="text-center text-white py-2 bg-tertiary">
          © 2024 Copyright:
          <p>Passion-mangas.fr</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
