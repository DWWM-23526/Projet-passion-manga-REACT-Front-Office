import { Card, Col, Container, Row } from "react-bootstrap";

import Img from "./../../../assets/img/hirohiko_araki.jpg";
import Header from "../../core/layout/header/Header";
import { useParams } from "react-router-dom";
import  { useMangakaId } from "../../shared/hooks/useMangaka";

const ShowMangakaScreen = () => {
  const {idMangaka} = useParams();
  const {data, loading, error} = useMangakaId(idMangaka);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>
  if (!data) return <p>No data available</p>;

  return (
    <>
    <Header title={data.first_name + " " + data.last_name} />
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
                <strong>Nom:</strong> {data.first_name}
              </Card.Text>
              <Card.Text>
                <strong>Prénom:</strong> {data.last_name}
              </Card.Text>
              <Card.Text>
                <strong>Naissance:</strong> {data.birthdate}
              </Card.Text>
              <hr className="my-4" />
              <Card.Title as="h3" className="mb-4">
                <strong>DESCRIPTION</strong>
              </Card.Title>
              <Card.Text>
                <p>{data.texte}</p> Amet fugiat possimus non sequi voluptatem
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
    </>
    
  );
};

export default ShowMangakaScreen;