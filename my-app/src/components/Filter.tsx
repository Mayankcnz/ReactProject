import { useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FilterProps, filters, FilterTypes } from '../interfaces/Filter';
const useStyles = makeStyles((theme) => ({
  form: {
    float: 'right',
  },

  root: {
    flexGrow: 1,
  },
}));

// can use generics here. Base filters which extends different other types of complex
// filters as the website grows

// can add more types in the future

const Filter = (props: Readonly<FilterProps>) => {
  const classes = useStyles();

  const handleChange = (index: number) => {
    props.onFilter(index);
  };

  return (
    <div className={classes.root}>
      <FormControl
        sx={{
          minWidth: 200,
        }}
        className={classes.form}
        size="small"
      >
        <InputLabel id="demo-select-small" variant="outlined">
          All
        </InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={props.selectedFilter}
          label="All"
        >
          {props.filters.map((val, index) => (
            <MenuItem
              onClick={(event) => handleChange(index)}
              key={index}
              value={val}
            >
              {val}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default Filter;
