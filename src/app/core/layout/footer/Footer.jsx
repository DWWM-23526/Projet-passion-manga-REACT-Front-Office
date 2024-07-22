import { Container, Image } from "react-bootstrap";
import  facebookSvg  from "../../../../assets/svg/facebook.svg";
import instagramSvg from "../../../../assets/svg/instagram.svg";
import githubSvg from "../../../../assets/svg/github.svg";
import twitterSvg from "../../../../assets/svg/twitter.svg";



const Footer = () => {
  return (
    <>
      <footer className="text-center text-white bg-primary">
        <Container className="d-flex justify-content-center py-4">
          <a href="#" className="mx-2">
            <Image src={facebookSvg} />
          </a>
          <a href="#" className="mx-2">
            <Image src={instagramSvg} />
          </a>
          <a href="#" className="mx-2">
            <Image src={githubSvg} />
          </a>
          <a href="#" className="mx-2">
            <Image src={twitterSvg} />
          </a>
        </Container>

        <div className="text-center text-white py-2 bg-dark">
          © 2024 Copyright:
          <p>Passion-mangas.fr</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
