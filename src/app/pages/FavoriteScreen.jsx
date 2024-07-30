import { Col, Container, Row } from "react-bootstrap";
import { useFetch } from "../shared/hooks/useFetch";
import { useApp } from "../core/hooks/useApp";

import Cards from "../shared/components/Card/Card";
import defaultImg from "../../assets/img/naruto1.jpg";
import PageNotFound from "./PageNotFound";

const FavoriteScreen = () => {
  
  const { user, isAuthenticated } = useApp();
  const { data } = useFetch(`/users/manga/${user.Id_user}`);

  if (!isAuthenticated) return <PageNotFound/>;

  

  const mangaList = data.map((manga) => (
    <Col xs={12} sm={6} md={4} lg={3} xl={3} className="d-flex justify-content-evenly size-col" key={manga.Id_manga}>
      <Cards title={manga.manga_name} imageUrl={defaultImg} url={`/manga/${manga.Id_manga}`} />
    </Col>
  ));

  return (
    <>
      <Container className="d-flex text-center">
        <Row className="g-3 mt-3">{mangaList}</Row>
      </Container>
    </>
  );
};

export default FavoriteScreen;
