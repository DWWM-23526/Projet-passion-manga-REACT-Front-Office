import { useState } from "react";
import { Container, Form } from "react-bootstrap";

import './searchbar.scss';
// eslint-disable-next-line react/prop-types
const SearchBar = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const handleInputChange = (event) => {
    const searchTerm = event.target.value;
    setSearch(searchTerm);
    onSearch(searchTerm);
  };
  return (
    <>
      <Container className="d-flex justify-content-center">
        <Form.Control
          type="text"
          value={search}
          onChange={handleInputChange}
          placeholder="Search..."
          className="form-control my-5 text-center searchBar"
        />
      </Container>
    </>
  );
};
export default SearchBar;
