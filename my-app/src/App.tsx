import React from 'react';
import logo from './logo.svg';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import './App.css';
import Header from './components/Header';
import { QueryClientProvider, QueryClient } from 'react-query';
import ProductList from './components/ProductList';
import useProductFilters, { isOfType } from './services/useProductFilters';
import Filter from './components/Filter';
import { filters } from './interfaces/Filter';
import { Box, Container, Grid } from '@material-ui/core';

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

  // As the app gets bigger , we can look to wrap this in contextapi
  //so as to avoid rendering everytime we ask for this hook in different components
  const { models, operations } = useProductFilters();

  const handleFilter = (index: number) => {
    const type = filters[index];

    console.log('typefilter', type);
    if (isOfType(type)) operations.updateFilter(type);
  };

  return (
    <>
      <ThemeProvider theme={customTheme}>
        <Container maxWidth="xl">
          <Header
            children={<Filter filters={[...filters]} onFilter={handleFilter} />}
          />

          <QueryClientProvider client={queryClient}>
            <ProductList filterBy={models.filters?.filterType} />
          </QueryClientProvider>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
