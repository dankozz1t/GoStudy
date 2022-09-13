import { Component } from 'react';
import Albums from './Albums/Albums';
import Products from './Products/Products';

export class App extends Component {
  getAlbums = false;
  getProducts = true;

  render() {
    return (
      <div>
        {this.getAlbums && <Albums />}
        {this.getProducts && <Products />}
      </div>
    );
  }
}
