import React from 'react';
import PropTypes from 'prop-types';
import {
  Row, Col, Form, Input, InputGroup, InputGroupAddon, Button,
} from 'reactstrap';

export default function Search(props) {
  const { searchValue, handleChange, handleSubmit } = props;
  return (
    <React.Fragment>
      <Row className="mt-5">
        <Col className="text-center">
          <p>
            <strong>Find Pokémon</strong>
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <Form onSubmit={handleSubmit}>
            <InputGroup>
              <Input type="text" placeholder="Search" value={searchValue} onChange={handleChange} />
              <InputGroupAddon addonType="append">
                <Button color="logoBlue">
                  <span className="text-logoYellow font-weight-bold">Search</span>
                </Button>
              </InputGroupAddon>
            </InputGroup>
          </Form>
        </Col>
      </Row>
    </React.Fragment>
  );
}
Search.propTypes = {
  searchValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
