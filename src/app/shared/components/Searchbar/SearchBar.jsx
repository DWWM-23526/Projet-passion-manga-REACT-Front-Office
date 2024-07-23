import { Container, Form } from "react-bootstrap";
import './searchBar.scss';

const SearchBar = () => {
  return (
    <>
    <Container className="d-flex justify-content-center">
      <Form method="post" className="mt-5 searchBar">
        <Form.Control
          type="text"
          name="search"
          placeholder="Rechercher"
          className="text-center"
          //Add onChange
        />
      </Form>
      </Container>
    </>
  );
};
export default SearchBar;
