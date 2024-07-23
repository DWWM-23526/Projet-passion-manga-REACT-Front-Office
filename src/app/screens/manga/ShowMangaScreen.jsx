import { Col, Row, Container, Card } from "react-bootstrap";

import "./showMangaScreen.scss";
import Img from "./../../../assets/img/naruto1.jpg";

const ShowMangaScreen = () => {
  return (
    <Container className="my-4">
      <Row>
        <Col xs={12} md={6} className="d-flex justify-content-center align-items-center">
          <Card className="border-0 shadow-sm ">
            <Card.Img variant="top" src={Img} alt="Manga cover" className="rounded manga-image" />
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <Card className="border-0 shadow-lg p-3">
            <Card.Body>
              <Card.Title as="h3" className="mb-4">
                <strong>INFORMATION</strong>
              </Card.Title>
              <Card.Text>
                <strong>Edition:</strong> {" test"}
              </Card.Text>
              <Card.Text>
                <strong>Nombre de tomes Total:</strong> {" test"}
              </Card.Text>
              <Card.Text>
                <strong>Année de sortie:</strong> {" test"}
              </Card.Text>
              <Card.Text>
                <strong>Numéro de tome:</strong> {" test"}
              </Card.Text>
              <hr className="my-4" />
              <Card.Title as="h3" className="mb-4">
                <strong>DESCRIPTION</strong>
              </Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugiat possimus non sequi voluptatem
                dolorem eos dolores quas tenetur similique, recusandae incidunt, nam eveniet, dolore impedit. Dicta,
                esse. Id, adipisci! Sint magni ad unde maiores exercitationem officia, deleniti quod ea suscipit labore
                molestias nihil modi illum architecto iure saepe natus nisi, vitae facere temporibus adipisci magnam
                neque. Totam, maxime facere!
              </Card.Text>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nam iste, recusandae adipisci, ipsa
                vitae tempora accusamus nemo quam in sequi labore eaque rem maiores culpa enim ex reiciendis maxime?
              </Card.Text>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto quis esse laborum nostrum tempore itaque
                impedit, beatae nemo molestiae cumque, expedita adipisci id ipsum sequi veritatis! Pariatur iste autem
                aut.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ShowMangaScreen;
