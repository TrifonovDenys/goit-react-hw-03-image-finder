import React, { Component } from "react";
import axios from "axios";
import {Searchbar} from "./Searchbar/Searchbar"
import { Loader } from "./Loader/Loader";
// import {ImageGallery} from "./ImageGallery/ImageGallery"

axios.defaults.baseURL = "https://pixabay.com/api/?q=cat&page=1&key=36775781-ef40f42b03ba5b079902920a8&image_type=photo&orientation=horizontal&per_page=12";

// const options = {
//   baseURL: `https://pixabay.com/api/`

// }

const ImageGallery = ({ articles }) => (
  <ul>
    {articles.map(({ id, previewURL}) => (
      <li key={id}>
        <img src={previewURL} alt="tree, cat, animal"/>
      </li>
    ))}
  </ul>
);

export class App extends Component {
  state = {
    articles: [],
    isLoading: false,
  };

  hendleInput = (e) => {
    console.log(e.target.value);
  }

  async componentDidMount() {
    this.setState({ isLoading: true })
    const response = await axios.get();
    this.setState({
      articles: response.data.hits,
      isLoading: false,
    });
  }

  render() {
    const { articles, isLoading } = this.state;
    return (
      <div>
        <Searchbar onInput={this.hendleInput} />
        {isLoading ? <Loader /> : <ImageGallery articles={articles}/>}
        
      </div>
    );
  }
}