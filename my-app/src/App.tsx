import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import './App.css';
import AppBar from './components/AppBar';
import { QueryClientProvider, QueryClient } from 'react-query';
import ProductList from './components/ProductList';
import useProductFilters, { isOfType } from './services/useProductFilters';
import Filter from './components/Filter';
import { filters } from './interfaces/Filter';
import { Container } from '@material-ui/core';
import SearchBar from './components/SearchBar';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HomeIcon from '@mui/icons-material/Home';
import CloseIcon from '@mui/icons-material/Close';

// custom color theme that can be applied across application  using ConextAPI
const customTheme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      contrastText: 'black',
    },
  },
});

const HeaderItems = () => (
  <div style={{ flexGrow: 1 }}>
    <ArrowBackIcon />
    <ArrowForwardIcon />
    <CloseIcon />
    <HomeIcon />
    <SearchBar />
  </div>
);

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

    if (isOfType(type)) operations.updateFilter(type);
  };

  const handleSearch = (text: string) => {};

  return (
    <>
      <ThemeProvider theme={customTheme}>
        <AppBar children={<HeaderItems />} />
        <Container maxWidth="xl" style={{ padding: 80 }}>
          <AppBar
            children={
              <Filter
                filters={[...filters]}
                onFilter={handleFilter}
                selectedFilter={models.filters?.filterType || 'All'} // learned about controlled and uncontrolled components, passing undefined instead of All was causing that warning
              />
            }
          />

          <QueryClientProvider client={queryClient}>
            <ProductList filterBy={models.filters?.filterType || 'All'} />
          </QueryClientProvider>
        </Container>
        <AppBar positionFixed={true} />
      </ThemeProvider>
    </>
  );
}

export default App;
