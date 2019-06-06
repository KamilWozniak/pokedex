import React from 'react';
import { Row, Col } from 'reactstrap';
import pokemonLogo from '../../assets/images/pokemonLogo.svg';
import './header.scss';

export default function Header() {
  return (
    <header className="mt-2 mb-4">
      <Row>
        <Col className="text-center">
          <img
            src={pokemonLogo}
            width="80%"
            alt="Pokemon international logo"
            className="header-max-width"
          />
        </Col>
      </Row>
    </header>
  );
}
