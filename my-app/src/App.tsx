import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import './App.css';
import AppBar from './components/AppBar';
import { QueryClientProvider, QueryClient } from 'react-query';
import ProductList from './components/ProductList';
import useProductFilters, { isOfType } from './services/useProductFilters';
import Filter from './components/Filter';
import { filters } from './interfaces/Filter';
import { Container, makeStyles } from '@material-ui/core';
import SearchBar from './components/SearchBar';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HomeIcon from '@mui/icons-material/Home';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';

// custom color theme that can be applied across application  using ConextAPI
const customTheme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      contrastText: 'black',
    },
  },
});

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 0,
    '@media (min-width: 780px)': {
      // important for handling phone and tablet sizes
      padding: 80,
    },
  },
}));

const HeaderItems = () => (
  <>
    <ArrowBackIcon fontSize="large" />
    <ArrowForwardIcon fontSize="large" />
    <CloseIcon fontSize="large" />
    <HomeIcon fontSize="large" />
  </>
);

/**
 * QueryProviders wrappes Component that needs to fetch the data, usinguseQuery hook
 */
function App() {
  const queryClient = new QueryClient();

  const classes = useStyles();
  // As the app gets bigger , we can look to wrap this in contextapi
  //so as to avoid rendering everytime we ask for this hook in different components
  const { models, operations } = useProductFilters();
  const [textSearch, setText] = React.useState<string>('');

  const handleFilter = (index: number) => {
    const type = filters[index];

    if (isOfType(type)) operations.updateFilter(type);
  };

  const handleSearch = (text: string) => {
    setText(text);
  };

  return (
    <>
      <ThemeProvider theme={customTheme}>
        <AppBar
          children={
            <div style={{ flexGrow: 1 }}>
              {' '}
              <HeaderItems /> <SearchBar onSearch={handleSearch} />{' '}
            </div>
          }
        />
        <Container maxWidth="xl" className={classes.container}>
          <AppBar
            children={
              <Filter
                filters={[...filters]}
                onFilter={handleFilter}
                selectedFilter={models.filters?.filterType || 'All'} // learned about controlled and uncontrolled components, passing undefined instead of All was causing that warning
              />
            }
          />
          {/* can make a lot of optimisations using react query without having
          // to implement mechanisms ourselves such as caching, infinte
          Scrolling, pagination etc */}
          <QueryClientProvider client={queryClient}>
            <ProductList
              filterBy={models.filters?.filterType || 'All'}
              searchBy={textSearch}
            />
          </QueryClientProvider>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
