import { 
  // Col, 
  Container
  // , Row 
} from "react-bootstrap";
// import Cards from "../../shared/components/Card/Card";
// import defaultImg from "../../../assets/img/naruto1.jpg";
import Header from "../../core/layout/header/Header";
// import SearchBar from "../../shared/components/Searchbar/SearchBar";
import { lazy, Suspense, 
  // useEffect, useState
 } from "react";
// import { useFetchData } from "../../shared/hooks/useFetchData";
import { BarLoader } from "react-spinners";

const SearchBarPreview = lazy(() => delay(import('../../shared/components/Searchbar/SearchBar')));

const MangaScreen = () => {
  // const { data } = useFetchData("/manga");

  // const [filteredMangas, setFilteredMangas] = useState([]);

  // useEffect(() => {
  //   if (data) {
  //     setFilteredMangas(data);
  //   }
  // }, [data]);

  // const handleSearch = (searchTerm) => {
  //   const filtered = data.filter((manga) =>
  //     manga.manga_name.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  //   setFilteredMangas(filtered);
  // };

  // const mangaList = filteredMangas.map((manga) => (
  //   <Col
  //     xs={12}
  //     sm={6}
  //     md={4}
  //     lg={3}
  //     xl={3}
  //     className="d-flex justify-content-evenly size-col"
  //     key={manga.Id_manga}
  //   >
  //     <Cards
  //       title={manga.manga_name}
  //       imageUrl={defaultImg}
  //       url={`/manga/${manga.Id_manga}`}
  //     />
  //   </Col>
  // ));

  return (
    <>
      <Header title="MANGAS" />

      <Container className="d-flex text-center">
        <Suspense
          fallback={
            <BarLoader
              color="#FF3925"
              height={4}
              loading
              speedMultiplier={0.8}
              width={1300}
              className="slider"
            />
          }
        >
          <SearchBarPreview />
        </Suspense>
        {/* <Row className="g-3 mt-3">{mangaList}</Row> */}
      </Container>
    </>
  );
};

export default MangaScreen;

async function delay(promise) {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  return promise;
}
