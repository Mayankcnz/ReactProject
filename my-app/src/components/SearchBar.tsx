import { TextField } from '@material-ui/core';

const SearchBar = () => {
  return (
    <TextField
      id="outlined-basic"
      label="Search Products"
      variant="outlined"
      size="small"
      style={{ float: 'right' }}
    />
  );
};

export default SearchBar;
