import React, { Component } from "react";
import axios from "axios";
import {Searchbar} from "./Searchbar/Searchbar"
import { Loader } from "./Loader/Loader";
import { ImageGallery} from './ImageGallery/ImageGallery'
import { Modal } from './Modal/Modal'
import {Button}  from './Button/Button'
import css from './App.module.css'
import api from "../services/api";

axios.defaults.baseURL = "https://pixabay.com/api/?q=cat&page=1&key=36775781-ef40f42b03ba5b079902920a8&image_type=photo&orientation=horizontal&per_page=12";

export class App extends Component {
  state = {
    searchText: '',
    articles: [],
    isLoading: false,
    isShowModal: false,
    imgToShow: '',
    error: null,
  };

  hendleInput = (e) => {
    console.log(e.target.value);
  }


  handleSearch = (searchText) => {
    this.setState({ searchText })
  }


  async componentDidMount() {
    this.setState({ isLoading: true })
    try {
      const articles = api.getImg("react");
      this.setState({ articles });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
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
    const { isLoading } = this.state;
    return (
      <div className={css.App}>
        <Searchbar handleSearch={this.handleSearch} />
        {isLoading ? <Loader /> : <ImageGallery searchText={this.state.searchText} showModal={this.showModal} />}
        {this.state.isShowModal && (<Modal closeModal={this.closeModal} img={this.state.imgToShow}></Modal>)}
        <Button/>
      </div>
    );
  }
}