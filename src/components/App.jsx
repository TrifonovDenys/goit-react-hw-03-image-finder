import React, { Component } from "react";
import {Searchbar} from "./Searchbar/Searchbar"
import { Loader } from "./Loader/Loader";
import { ImageGallery} from './ImageGallery/ImageGallery'
import { Modal } from './Modal/Modal'
import {Button}  from './Button/Button'
import css from './App.module.css'
import api from "../services/api";


export class App extends Component {
  state = {
    searchText: '',
    isLoading: false,
    isShowModal: false,
    modalShow: {},
    loadMore: false,
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
 

  render() {
    const { searchText, isLoading, loadMore, isShowModal, modalShow } = this.state;
    return (
      <div className={css.App}>
        <Searchbar hendleInput={this.hendleInput} />
        {isLoading ? <Loader /> :
          <ImageGallery
            searchText={searchText}
            showModal={this.showModal}
            loadMore = {loadMore}
        />}
        {isShowModal && (<Modal closeModal={this.closeModal} img={modalShow}></Modal>)}
        {loadMore && <Button/>}
      </div>
    );
  }
}