import { TextField } from '@material-ui/core';
import { SearchProps } from '../interfaces/Filter';

const SearchBar = (props: SearchProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onSearch(event.target.value);
  };
  return (
    <TextField
      id="outlined-basic"
      label="Search Products"
      variant="outlined"
      size="small"
      style={{ float: 'right' }}
      onChange={handleChange}
    />
  );
};

export default SearchBar;
