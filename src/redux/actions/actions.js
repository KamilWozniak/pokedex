import axios from 'axios';
import * as actionType from './types';

export const getPokemons = (url = '') => (dispatch) => {
  axios.get(`http://localhost:4000/pokemon${url}`).then((response) => {
    dispatch({
      type: actionType.GET_POKEMONS,
      payload: response.data,
      total: response.headers['x-total-count'],
    });
  });
};

export const updateSearch = value => (dispatch) => {
  dispatch({ type: actionType.UPDATE_SEARCH, payload: value });
};

export const onSearchSubmit = value => (dispatch) => {
  dispatch({ type: actionType.SEARCH, payload: value });
};

export const changeItemsNumber = number => (dispatch) => {
  dispatch({ type: actionType.SET_ITEMS_PER_PAGE, payload: Number(number) });
};

export const toggleModal = value => (dispatch) => {
  dispatch({ type: actionType.TOGGLE_MODAL, modalState: value });
};

export const getPokemonToModal = id => (dispatch) => {
  fetch(`http://localhost:4000/pokemon/${id}`)
    .then(response => response.json())
    .then(data => dispatch({ type: actionType.GET_MODAL_POKEMON, payload: data }));
};

export const onPageChange = (pageNumber = 1, itemsPerPage = 10, query = '') => (dispatch) => {
  fetch(`http://localhost:4000/pokemon/?_page=${pageNumber}&_limit=${itemsPerPage}&q=${query}`)
    .then(response => response.json())
    .then(data => dispatch({ type: actionType.CHANGE_PAGE, pokemons: data, currPage: pageNumber }));
};

export const onPrevChange = val => (dispatch) => {
  dispatch({ type: actionType.CHANGE_PREV, payload: val });
};

export const onNextChange = val => (dispatch) => {
  dispatch({ type: actionType.CHANGE_NEXT, payload: val });
};

export const filterPokemon = value => (dispatch) => {
  fetch(`http://localhost:4000/pokemon/?num=${value}`)
    .then(response => response.json())
    .then(data => dispatch({ type: actionType.FILTER_POKEMON, payload: data[0] }));
};
