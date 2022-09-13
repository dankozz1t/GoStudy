import React, { Component } from 'react';
import axios from 'axios';

export default class Albums extends Component {
  state = {
    page: 1,
    albums: [],
  };

  componentDidMount() {
    this.getRandomUser();
  }

  componentDidUpdate(_, prevState) {
    if (prevState.page !== this.state.page) {
      this.getRandomUser();
    }
  }

  getRandomUser = async () => {
    const { page } = this.state;
    const albumsAPI = axios.create({
      baseURL: 'https://jsonplaceholder.typicode.com/albums',
    });

    try {
      const response = await albumsAPI.get(
        `?_page=${this.state.page}&_limit=3`
      );

      this.setState(state => ({
        albums:
          page === 1 ? response.data : [...state.albums, ...response.data],
      }));
    } catch (error) {}
  };

  handleClickLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const elements = this.state.albums.map(album => (
      <h1 key={album.id}>
        <span>{album.id}</span>. {album.title}
      </h1>
    ));

    return (
      <>
        {elements}
        <button type="button" onClick={this.handleClickLoadMore}>
          Load more
        </button>
      </>
    );
  }
}
