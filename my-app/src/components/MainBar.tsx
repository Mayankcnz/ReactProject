import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HomeIcon from '@mui/icons-material/Home';
import CloseIcon from '@mui/icons-material/Close';
import SearchBar from './SearchBar';
import { SearchProps } from '../interfaces/Filter';

const MainBar = (props: SearchProps) => {
  const handleSearch = (text: string) => {
    props.onSearch(text);
  };
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <ArrowBackIcon fontSize="large" />
            <ArrowForwardIcon fontSize="large" />
            <CloseIcon fontSize="large" />
            <HomeIcon fontSize="large" />
          </Nav>
          <SearchBar onSearch={handleSearch} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainBar;
