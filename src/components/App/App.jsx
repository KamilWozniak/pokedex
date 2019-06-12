import React from 'react';
import './App.scss';
import { Container } from 'reactstrap';
import Header from '../Header';
import Search from '../Search';
import Select from '../Select';
import PokemonList from '../PokemonList';
import Pagination from '../Pagination';
import Modal from '../Modal';
import Footer from '../Footer';

// TODO: implement react router to pages
// TODO: read react router documentation

function App() {
  return (
    <React.Fragment>
      <div className="body-min-height">
        <Container className="p-xs-1 p-sm-4 pb-0 mb-0">
          <Header />
          <Search />
          <Select />
        </Container>
        <Container fluid className="px-xs-1 px-sm-4 mt-0 mb-5 pt-0">
          <PokemonList />
          <Pagination />
        </Container>
      </div>
      <Footer />
      <Modal />
    </React.Fragment>
  );
}

export default App;
