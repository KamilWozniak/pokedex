import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal, ModalHeader, ModalBody, ModalFooter, Button, Row, Col,
} from 'reactstrap';
import uuid from 'uuid';
import pokeball from '../../assets/images/pokeball-loading.png';

export default function PokemonModal(props) {
  const {
    toggleModalState,
    closeModal,
    pokemonData,
    handleMultipliers,
    handleCandys,
    handlePrevEvo,
    handleNextEvo,
    prevState,
    nextState,
    handleClickNext,
    handleClickPrev,
    loading,
  } = props;
  if (loading) {
    return (
      <aside>
        <Modal isOpen={toggleModalState}>
          <ModalHeader toggle={closeModal} className="border border-white" />
          <ModalBody>
            <Row className="m-0 pb-3 ">
              <Col className="d-flex justify-content-center">
                <img src={pokeball} alt="pokeball" className="modal-loading-image" />
              </Col>
            </Row>
            <Row>
              <Col className="d-flex justify-content-center mt-2">
                <h3 className="text-uppercase">loading, please wait</h3>
              </Col>
            </Row>
          </ModalBody>
        </Modal>
      </aside>
    );
  }
  return (
    <aside>
      <Modal isOpen={toggleModalState}>
        <ModalHeader toggle={closeModal} className="border border-white" />
        <ModalBody>
          <div className="text-center">
            <img src={pokemonData.img} alt={`${pokemonData.name}`} />
            <h4 className="mt-3">{`#${pokemonData.num} ${pokemonData.name}`}</h4>
            <p className="property-header">type:</p>
            <ul className="ul-style">
              {pokemonData.type.map(type => (
                <li className={`text-${type}`} key={uuid.v4()}>
                  {type}
                </li>
              ))}
            </ul>
            <p className="property-header">height:</p>
            <p>{pokemonData.height}</p>
            <p className="property-header">weight:</p>
            <p>{pokemonData.weight}</p>
            <p className="property-header">candy type:</p>
            <p>{pokemonData.candy}</p>
            {handleCandys(pokemonData.candy_count)}
            <p className="property-header">egg:</p>
            <p>{pokemonData.egg}</p>
            <p className="property-header">spawn chance:</p>
            <p>{pokemonData.spawn_chance}</p>
            <p className="property-header">average spawns:</p>
            <p>{pokemonData.avg_spawns}</p>
            <p className="property-header">spawn time:</p>
            <p>{pokemonData.spawn_time}</p>
            {handleMultipliers(pokemonData.multipliers)}
            <p className="property-header">weaknesses:</p>
            <ul className="ul-style">
              {pokemonData.weaknesses.map(weak => (
                <li className={`text-${weak}`} key={uuid.v4()}>
                  {weak}
                </li>
              ))}
            </ul>
            {handlePrevEvo(pokemonData.prev_evolution)}
            {handleNextEvo(pokemonData.next_evolution)}
          </div>
        </ModalBody>
        <ModalFooter className="border border-white justify-content-center p-1 m-1">
          <Row className="w-100 justify-content-between">
            <Col className="p-0 m-0 mb-1 text-center align-self-center">
              <Button
                color="logoBlue"
                disabled={!prevState}
                onClick={() => handleClickPrev(pokemonData.prev_evolution)}
                className="modal-button w-100"
              >
                previous
                <br />
                evolution
              </Button>
            </Col>
            <Col className="p-0 m-0 text-center align-self-center">
              <Button color="logoBlue" className="modal-button" onClick={closeModal}>
                close
              </Button>
            </Col>
            <Col className="p-0 m-0 text-center align-self-center">
              <Button
                className="modal-button w-100"
                color="logoBlue"
                disabled={!nextState}
                onClick={() => handleClickNext(pokemonData.next_evolution)}
              >
                next
                <br />
                evolution
              </Button>
            </Col>
          </Row>
        </ModalFooter>
      </Modal>
    </aside>
  );
}

PokemonModal.propTypes = {
  toggleModalState: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  pokemonData: PropTypes.instanceOf(Object).isRequired,
  handleMultipliers: PropTypes.func.isRequired,
  handleCandys: PropTypes.func.isRequired,
  handlePrevEvo: PropTypes.func.isRequired,
  handleNextEvo: PropTypes.func.isRequired,
  nextState: PropTypes.bool.isRequired,
  prevState: PropTypes.bool.isRequired,
  handleClickNext: PropTypes.func.isRequired,
  handleClickPrev: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};
