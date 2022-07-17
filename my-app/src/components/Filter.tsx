import { useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FilterProps, FilterTypes } from '../interfaces/Filter';
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

// type FilterTypes = 'Type';

// convert string to the type useProductFilter needs to set the state

const Filter = (props: Readonly<FilterProps>) => {
  const classes = useStyles();

  const handleChange = (index: number) => {
    console.log('onfilter');
    props.onFilter(index);
  };

  return (
    <div className={classes.root}>
      <FormControl
        sx={{
          minWidth: 120,
        }}
        className={classes.form}
        size="small"
      >
        <InputLabel id="demo-select-small" variant="outlined">
          Age
        </InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={''}
          label="Age"
        >
          {props.filters.map((index, val) => (
            <MenuItem
              onClick={(event) => handleChange(val)}
              key={index}
              value={index}
            >
              {index}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default Filter;
