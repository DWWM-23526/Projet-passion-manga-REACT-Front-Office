import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "./../../core/layout/header/Header"


const HomeScreen = () => {
  return (
    <>
    <div>
    <Header title="BIENVENUE SUR MANGA PASSION" />
      <Container>
        <Row>
          <Col>
            <h2><Link className="text-decoration-none" to={"/manga"}>MANGAS</Link></h2>
            <p>Explorez notre vaste bibliothèque de mangas. De l&apos;action trépidante aux romances émouvantes, 
              en passant par des thrillers palpitants et des comédies hilarantes, notre collection couvre tous les 
              genres pour satisfaire tous les goûts.</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2><Link className="text-decoration-none" to={"/mangaka"}>MANGAKAS</Link></h2>
            <p>Découvrez les artistes derrière vos mangas préférés. Notre section Mangakas vous présente les auteurs 
              et illustrateurs, leur biographie, leurs œuvres majeures et leurs inspirations.</p>
            </Col>
        </Row>
        <Row>
          <Col>
            <h2><Link className="text-decoration-none" to={"/tags"}>GENRES</Link></h2>
            <p>Trouvez les mangas qui correspondent exactement à vos goûts en parcourant notre section Genres. 
              Que vous soyez fan de shōnen, shōjo, seinen, josei, ou encore des sous-genres comme le mecha, 
              l&apos;isekai, ou le slice of life, nous avons organisé notre bibliothèque pour faciliter votre recherche.</p>
            </Col>
        </Row>
        <Row>
          <Col>
          <h2>Rejoignez notre communauté</h2>
        <p>Pour une expérience encore plus enrichissante, créez un compte sur MANGA PASSION. En devenant membre, vous pourrez :</p>
        <ul>
            <li>Suivre vos lectures et créer votre propre bibliothèque de mangas.</li>
            <li>Laisser des avis et des notes sur vos lectures.</li>
            <li>Recevoir des recommandations personnalisées.</li>
            <li>Participer aux discussions et échanger avec d&apos;autres fans de mangas.</li>
        </ul>
        <button className="btn "><a href="/login" className="text-decoration-none">Inscrivez-vous dès maintenant</a></button>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  )
}

export default HomeScreen;