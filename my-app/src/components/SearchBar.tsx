import { TextField } from '@material-ui/core';
import { SearchProps } from '../interfaces/Filter';
import Form from 'react-bootstrap/Form';

const SearchBar = (props: SearchProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onSearch(event.target.value);
  };
  return (
    <Form className="d-flex">
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        onChange={handleChange}
      />
    </Form>
  );
};

export default SearchBar;
