import { Container, Row } from "react-bootstrap";
import Cards from "../../shared/components/Card/Card";
import imageUrl1 from "../../../assets/img/naruto1.jpg"

const MangaScreen = () => {
  return (
    <>
      <div>Coucou Manga</div>
      <Container className="d-flex justify-content-center">
        <Row className="g-3 mt-3">
          <Cards title={"Naruto"} imageUrl={imageUrl1}/>
          <Cards title={"Naruto"} imageUrl={imageUrl1}/>
          <Cards title={"Naruto"} imageUrl={imageUrl1}/>
          <Cards title={"Naruto"} imageUrl={imageUrl1}/>
          <Cards title={"Naruto"} imageUrl={imageUrl1}/>
          <Cards title={"Naruto"} imageUrl={imageUrl1}/>
          <Cards title={"Naruto"} imageUrl={imageUrl1}/>
          <Cards title={"Naruto"} imageUrl={imageUrl1}/>
          <Cards title={"Naruto"} imageUrl={imageUrl1}/>
          <Cards title={"Naruto"} imageUrl={imageUrl1}/>
        </Row>
      </Container>
    </>
  );
};

export default MangaScreen;
