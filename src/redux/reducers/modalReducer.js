import {
  TOGGLE_MODAL,
  GET_MODAL_POKEMON,
  CHANGE_PREV,
  CHANGE_NEXT,
  FILTER_POKEMON,
  LOADING_MODAL_OFF,
  LOADING_MODAL_ON,
} from '../actions/types';

const initialState = {
  toggleModal: false,
  pokemonInModal: {
    type: [],
    multipliers: [],
    weaknesses: [],
    next_evolution: [],
  },
  prevEvo: false,
  nextEvo: false,
  loadingModal: false,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MODAL: {
      return {
        ...state,
        toggleModal: action.modalState,
      };
    }
    case GET_MODAL_POKEMON: {
      return {
        ...state,
        pokemonInModal: action.payload,
      };
    }
    case CHANGE_PREV: {
      return {
        ...state,
        prevEvo: action.payload,
      };
    }
    case CHANGE_NEXT: {
      return {
        ...state,
        nextEvo: action.payload,
      };
    }
    case FILTER_POKEMON: {
      return {
        ...state,
        pokemonInModal: action.payload,
      };
    }
    case LOADING_MODAL_ON: {
      return {
        ...state,
        loadingModal: true,
      };
    }
    case LOADING_MODAL_OFF: {
      return {
        ...state,
        loadingModal: false,
      };
    }
    default:
      return state;
  }
};

export default modalReducer;
