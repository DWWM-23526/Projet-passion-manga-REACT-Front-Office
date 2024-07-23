import { Container , Image } from "react-bootstrap";
import baner from "../../../../assets/img/baner.jpg"

const Header = () => {
    let isConnected =  true;

    let connectedPart;

    if(isConnected){
        connectedPart = (<h1>ici tu es connecté </h1>);
    }

    

    return (
        <>
            <header className="text-center bg-primary">
                <Container>
                    <div>Cc</div>
                    <Image src={baner}/>
                    {connectedPart}
                </Container>
            </header>
        </>
    );
}

export default Header;