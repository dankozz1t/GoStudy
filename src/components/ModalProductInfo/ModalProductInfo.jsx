import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';

export default class ModalProductInfo extends Component {
  state = {
    product: {},
  };

  componentDidMount() {
    this.getProductsById(this.props.id);
  }

  getProductsById = async id => {
    const productsAPI = axios.create({
      baseURL: 'https://62becfba0bc9b125615fd0f7.mockapi.io/api/products',
    });

    try {
      const response = await productsAPI.get(`/${id}`);
      this.setState({ product: response.data });
    } catch (error) {}
  };

  render() {
    const { id, name, price, description, createdAt } = this.state.product;

    return (
      <>
        <Modal
          show={this.props.isModalShow}
          onHide={this.props.handleClickModalClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>
              {id}. {name}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              <b>description: </b> {description}
            </p>
            <p>
              <b>price: </b> {price}
            </p>
            <p>
              <b>crearedAt: </b>
              {createdAt}
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={this.props.handleClickModalClose}
            >
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                console.log(this.props.handleClickModalClose);
                this.props.handleClickModalClose();
              }}
            >
              Ok. Thanks!
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
