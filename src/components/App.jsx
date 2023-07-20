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
    articles: [],
    isLoading: false,
    isShowModal: false,
    imgToShow: '',
    error: null,
    loadMore: false
  };

  hendleInput = (e) => {
    console.log(e.target.value);
  }


  handleSearch = (searchText) => {
    this.setState({ searchText })
  }

  showModal = (e) => {
    this.setState({
      isShowModal: true,
      imgToShow: e.target.ariaModal,
    })
    console.log(this.state);
  }

  closeModal = () => {
    this.setState({isShowModal: false})
  }
 

  render() {
    const { isLoading, loadMore, isShowModal } = this.state;
    return (
      <div className={css.App}>
        <Searchbar handleSearch={this.handleSearch} />
        {isLoading ? <Loader /> : <ImageGallery
          searchText={this.state.searchText}
          showModal={this.showModal}
          showLoadMore = {loadMore}
        />}
        {isShowModal && (<Modal closeModal={this.closeModal} img={this.state.imgToShow}></Modal>)}
        {loadMore && <Button/>}
      </div>
    );
  }
}