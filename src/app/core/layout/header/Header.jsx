/* eslint-disable react/prop-types */

import { Image, Row, Col } from "react-bootstrap";
import { useApp } from "../../hooks/useApp";

import baner from "./../../../../assets/img/baner.jpg";
import "./header.scss";

const Header = () => {
  const { title } = useApp();

  return (
    <>
      <header className="bg-dark">
        <div className="marge-pm">
          <Row className="bg-primary">
            <Col xs={12} sm={8} className="my-5">
              <h1 className="text-light">{title}</h1>
            </Col>
            <Col xs={12} sm={4} className="align-self-end mb-3 pe-3">
              <Image className="img-fluid" src={baner} />
            </Col>
          </Row>
        </div>
      </header>
    </>
  );
};

export default Header;
