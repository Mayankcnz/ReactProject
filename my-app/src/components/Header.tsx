import {
  AppBar,
  Button,
  Container,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { styled } from '@mui/system';
import sx from '@mui/system/sx';
import Toolbar from '@mui/material/Toolbar';
import React from 'react';

const MyThemeComponent = styled('div')(
  sx({
    color: 'black',
    backgroundColor: 'yellow',
    m: 0,
    padding: 4,
    borderRadius: 1,
    position: 'absolute',
    top: '10%',
    left: '50%',
    msTransform: 'translate(-50%, -50%)',
    transform: 'translate(-50%, -50%)',
    width: '90%',
  }),
);

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    paddingLeft: 100,
  },
  typography: {
    flexGrow: 1,
    align: 'center',
  },

  appbar: {
    marginLeft: 10,
  },
});

type Props = {
  children?: JSX.Element;
};

/**
 * Takes children prop that allows consumer of this component to render custom props
 * @param props : children
 * @returns
 */

const Header = (props: Props) => {
  const classes = useStyles();

  return (
    //   <MyThemeComponent>{props.children}</MyThemeComponent>
    <React.Fragment>
      <Toolbar
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          backgroundColor: 'lightblue',
        }}
      >
        {props.children}
      </Toolbar>
    </React.Fragment>
  );
};

export default Header;
