
import { Container, Form } from "react-bootstrap";
import PropTypes from "prop-types";

import "./searchbar.scss";
const SearchBar = ({ onSearch, searchTerm }) => {

  const handleInputChange = (event) => {
    const searchTerm = event.target.value;
    onSearch(searchTerm);
  };

  return (
    <>
      <Container className="d-flex justify-content-center">
        <Form.Control
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search..."
          className="form-control my-5 text-center searchBar"
        />
      </Container>
    </>
  );
};
SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  searchTerm: PropTypes.string,
};
export default SearchBar;
