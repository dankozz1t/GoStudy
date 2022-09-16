import React, { Component } from 'react';
import ModalProductInfo from '../ModalProductInfo/ModalProductInfo';
import axios from 'axios';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

export default class Products extends Component {
  state = {
    products: [],
    isModalShow: false,
    currentId: 0,
    isLoading: false,
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    this.setState({ isLoading: true });
    const productsAPI = axios.create({
      baseURL: 'https://62becfba0bc9b125615fd0f7.mockapi.io/api/products',
    });

    try {
      const response = await productsAPI.get(`?&limit=5`);
      this.setState({ products: response.data, isLoading: false });
    } catch (error) {}
  };

  handleClickModalOpen = id => {
    this.setState({ isModalShow: true, currentId: id });
  };

  handleClickModalClose = () => {
    this.setState({ isModalShow: false });
  };

  render() {
    const elements = this.state.products.map((product, index) => (
      <ListGroup.Item
        as="li"
        key={index}
        onClick={() => {
          this.handleClickModalOpen(product.id);
        }}
      >
        <Button variant="primary" size="lg">
          {product.name} - {product.price}
        </Button>
      </ListGroup.Item>
    ));

    return (
      <>
        {this.state.isLoading && <p>Loading data... (To long time)</p>}

        <ListGroup as="ul">{elements}</ListGroup>

        {this.state.isModalShow && (
          <ModalProductInfo
            id={this.state.currentId}
            isModalShow={this.state.isModalShow}
            handleClickModalClose={this.handleClickModalClose}
          />
        )}
      </>
    );
  }
}
