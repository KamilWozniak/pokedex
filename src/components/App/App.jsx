import React from 'react';
import './App.scss';
import { Container } from 'reactstrap';
import Header from '../Header';
import Search from '../Search';
import Select from '../Select';
import PokemonList from '../PokemonList';
import Pagination from '../Pagination';
import Modal from '../Modal';

function App() {
  return (
    <Container className="p-5">
      <Header />
      <Search />
      <Select />
      <PokemonList />
      <Pagination />
      <Modal />
    </Container>
  );
}

export default App;
