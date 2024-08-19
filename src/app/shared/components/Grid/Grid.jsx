import { Col, Container, Row } from "react-bootstrap";
import { useFetch } from "../../hooks/useFetch";
import PropTypes from "prop-types";
import { Suspense, useEffect, useState } from "react";
import CardLoader from "../Loader/CardLoader";
import { BarLoader } from "react-spinners";

const Grid = ({ searchTerm, fetchUrl, defaultImg, detailUrl, getTitle, CardComponent, getId }) => {
  const finalFetchUrl = searchTerm ? `${fetchUrl}/search/${searchTerm}` : fetchUrl;
  const { data, loading, error } = useFetch(finalFetchUrl);
  const [loader, setloader] = useState(false);

  useEffect(() => {
    if (loading) {
      setloader(true);
    } else {
      setTimeout(() => {
        setloader(false);
      }, 500);
    }
  }, [loading, setloader]);

  if (loader) {
    return (
      <>
        <Container className="d-flex justify-content-evenly ">
          <BarLoader color="#c5c5c5" height={10} speedMultiplier={0.8} width={450} className="mt-5" />
        </Container>
      </>
    );
  }

  if (error || !data || data.length === 0) {
    return <></>;
  }

  return (
    <Container>
      <Row className="justify-content-evenly gy-5 mt-3">
        {data.map((item) => (
          <Col key={getId(item)} xs={12} sm={6} md={4} lg={3} xl={3} className="d-flex justify-content-center size-col">
            <Suspense fallback={<CardLoader />}>
              <CardComponent
                title={getTitle(item)}
                imageUrl={defaultImg}
                url={detailUrl ? `${detailUrl}/${getId(item)}` : `/page_not_found`}
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
  searchTerm: PropTypes.string.isRequired,
};

export default Grid;
