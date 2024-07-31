import { Col, Container, Row } from "react-bootstrap";
import { useFetch } from "../../hooks/useFetch";
import PropTypes from "prop-types";
import { Suspense } from "react";
import CardLoader from "../Loader/CardLoader";

const Grid = ({
  fetchUrl,
  defaultImg,
  detailUrl,
  getTitle,
  CardComponent,
  getId,
}) => {
  const { data } = useFetch(fetchUrl);

  return (
    <Container>
      <Row className="g-3 mt-3">
        {data.map((item) => (
          <Col
            key={getId(item)}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={3}
            className="d-flex justify-content-evenly size-col"
          >
            <Suspense fallback={
              <CardLoader/>
            }>
            <CardComponent
              title={getTitle(item)}
              imageUrl={defaultImg}
              url={
                detailUrl ? `${detailUrl}/${getId(item)}` : `/page_not_found`
              }
            />
            </Suspense>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
Grid.propTypes = {
  fetchUrl: PropTypes.string.isRequired,
  defaultImg: PropTypes.string.isRequired,
  detailUrl: PropTypes.string.isRequired,
  getTitle: PropTypes.func.isRequired,
  CardComponent: PropTypes.elementType.isRequired,
  getId: PropTypes.func.isRequired,
};

export default Grid;
