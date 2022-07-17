import { useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FilterProps, FilterTypes } from '../interfaces/Filter';
// const useStyles = makeStyles((theme) => ({
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//   },
//   selectEmpty: {
//     marginTop: theme.spacing(2),
//   },
//   icon: {
//     right: 0,
//   },
//   iconOpen: {
//     transform: 'none',
//   },
//   formControlLabel: {
//     left: 24,
//   },
//   selectSelect: {
//     paddingLeft: '24px',

//     '&.MuiOutlinedInput-root': {
//       borderRight: '6px solid green',
//     },
//   },
// }));

// can use generics here. Base filters which extends different other types of complex
// filters as the website grows

// can add more types in the future

// type FilterTypes = 'Type';


// convert string to the type useProductFilter needs to set the state

const Filter = (props: FilterProps) => {
  // const classes = useStyles();

  // Object.keys(props).forEach((key) => {
  //   console.log('key', key, 'bal', props[Number(key)]['0']);
  // });
  // const { models, operations } = useProductFilter();

  const handleChange = (index: number) => {
    console.log('999999');
    props.onFilter(index);
  };

  return (
    <FormControl
      sx={{
        minWidth: 120,
        position: 'relative',
        float: 'right',
      }}
      size="small"
    >
      <InputLabel id="demo-select-small">Age</InputLabel>
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
  );
};

export default Filter;
