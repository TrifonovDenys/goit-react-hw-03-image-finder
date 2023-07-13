import React, { Component } from "react";
import axios from "axios";
import { Loader } from "./Loader/Loader";

axios.defaults.baseURL = "https://hn.algolia.com/api/v1";

const ArticleList = ({ articles }) => (
  <ul>
    {articles.map(({ objectID, url, title }) => (
      <li key={objectID}>
        <a href={url} target="_blank" rel="noreferrer noopener">
          {title}
        </a>
      </li>
    ))}
  </ul>
);

export class App extends Component {
  state = {
    articles: [],
    isLoading: false,
  };

  async componentDidMount() {
    this.setState({ isLoading: true })
    const response = await axios.get("/search?query=react");
    this.setState({
      articles: response.data.hits,
      isLoading: false,
    });
  }

  render() {
    const { articles, isLoading } = this.state;
    return (
      <div>
        {isLoading ? <Loader/> : <ArticleList articles={articles} />}
      </div>
    );
  }
}