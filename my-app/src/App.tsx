import React from 'react';
import logo from './logo.svg';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import './App.css';
import Header from './components/Header';
import { QueryClientProvider, QueryClient } from 'react-query';
import ProductList from './components/ProductList';

// custom color theme that can be applied across application  using ConextAPI
const customTheme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      contrastText: 'black',
    },
  },
});

/**
 * QueryProviders wrappes Component that needs to fetch the data, usinguseQuery hook
 */
function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <ThemeProvider theme={customTheme}>
        <Header />
        <QueryClientProvider client={queryClient}>
          <ProductList />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
