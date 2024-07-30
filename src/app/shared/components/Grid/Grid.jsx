/* eslint-disable react/prop-types */
import { Col, Container, Row } from "react-bootstrap";
import { useFetch } from "../../hooks/useFetch";

const Grid = ({ fetchUrl, defaultImg, detailUrl, getTitle, CardComponent, getId }) => {
  const { data } = useFetch(fetchUrl);


  return (
    <Container>
      <Row className="g-3 mt-3">
        {data.map((item) => (
          <Col key={getId(item)} xs={12} sm={6} md={4} lg={3} xl={3} className="d-flex justify-content-evenly size-col">
            <CardComponent
              title={getTitle(item)}
              imageUrl={defaultImg}
              url={detailUrl ? `${detailUrl}/${getId(item)}` : `/page_not_found`}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Grid;
