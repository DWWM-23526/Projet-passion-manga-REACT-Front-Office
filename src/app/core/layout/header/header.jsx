/* eslint-disable react/prop-types */
import { Image, Row, Col } from "react-bootstrap";
import baner from "./../../../../assets/img/baner.jpg"
import "./header.scss"

const Header = (props) => {
    let isConnected =  true;

    let connectedPart;


    if(isConnected){
        connectedPart = (<h1>ici tu es connecté </h1>);
    }    

    return (
        <>
            <header className="text-center bg-dark">
                <div className="marge-pm">
                    <Row className="bg-primary">
                        <Col xs={12} sm={9} className="my-5">
                            <div> MSG : {props.title}</div>
                            
                            {connectedPart}
                        </Col>
                        <Col xs={12} sm={3} className="align-self-end mb-3 mr-1">
                            <Image className="img-fluid" src={baner}/>
                        </Col>
                    </Row>
                </div>
            </header>
        </>
    );
}

export default Header;