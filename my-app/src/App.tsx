import React from 'react';
import logo from './logo.svg';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import './App.css';
import Header from './components/Header';


// custom color theme that can be applied across application  using ConextAPI
const customTheme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      contrastText: 'black',
    },
  },
});

function App() {

  return (
    <>
      <ThemeProvider theme={customTheme}>
        <Header />
      </ThemeProvider>
    </>
  );
}

export default App;
