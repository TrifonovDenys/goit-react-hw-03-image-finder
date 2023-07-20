import React, { Component } from "react";
import {Searchbar} from "./Searchbar/Searchbar"
import { Loader } from "./Loader/Loader";
import { ImageGallery} from './ImageGallery/ImageGallery'
import { Modal } from './Modal/Modal'
import {Button}  from './Button/Button'
import css from './App.module.css'
import { getImg } from 'services/api';


export class App extends Component {
  state = {
    page: 1,
    searchText: '',
    isLoading: false,
    isShowModal: false,
    modalShow: {},
    loadMore: false,
    gallery: [],
  };



  hendleInput = (searchText) => {
    this.setState({ searchText })
  }

  showModal = modalShow => {
    this.setState({isShowModal: true})
    this.setState({ modalShow});
  }

  closeModal = () => {
    this.setState({isShowModal: false})
  }

  showButton = () => {
    this.setState({loadMore: true})
  }


 handleLoadMore = async () => {
  const { page, searchText, gallery } = this.state;
  this.setState({ isLoading: true });
  console.log(gallery);

  await getImg(searchText, page + 1).then((newGallery) => {
    this.setState((prevState) => ({
      gallery: [...prevState.gallery, ...newGallery],
      page: prevState.page + 1,
      isLoading: false,
    }));
  });
};
 

  render() {
    const { searchText, isLoading, loadMore, isShowModal, modalShow , gallery } = this.state;
    return (
      <div className={css.App}>
        <Searchbar hendleInput={this.hendleInput} />
        {isLoading ? <Loader /> :
          <ImageGallery
            searchText={searchText}
            showModal={this.showModal}
            loadMore={loadMore}
            showButton={this.showButton}
            gallery={gallery}
        />}
        {isShowModal && (<Modal closeModal={this.closeModal} img={modalShow}></Modal>)}
        {loadMore && <Button onClick={this.handleLoadMore} />}
      </div>
    );
  }
}