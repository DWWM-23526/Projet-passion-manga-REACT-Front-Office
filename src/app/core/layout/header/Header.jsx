/* eslint-disable react/prop-types */
import { Image, Row, Col } from "react-bootstrap";
import baner from "./../../../../assets/img/baner.jpg"
import "./header.scss"

const Header = (props) => {
    let isConnected =  false;

    let connectedPart;


    if(isConnected){
        connectedPart = (<h1>ici tu es connecté </h1>);
    }    

    return (
        <>
            <header className="bg-dark">
                <div className="marge-pm">
                    <Row className="bg-primary">
                        <Col xs={12} sm={8} className="my-5">
                            <h1 className="text-light">{props.title}</h1>
                            <br />
                            {connectedPart}
                            <br />
                        </Col>
                        <Col xs={12} sm={4} className="align-self-end mb-3 pe-3">
                            <Image className="img-fluid" src={baner}/>
                        </Col>
                    </Row>
                </div>
            </header>
        </>
    );
}

export default Header;
