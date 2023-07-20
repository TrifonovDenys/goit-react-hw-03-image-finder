import { Component } from "react"
import { getImg } from 'services/getImg';
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import css from "./ImageGallery.module.css"

export class ImageGallery extends Component {

  state = {
    gellery: null,
  }

 componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchText !== this.props.searchText) {
      getImg(this.props.searchText).then(gellery => this.setState({gellery: gellery}))
    }
  }

  render() {
    const { gellery } = this.state
    return (
      <>
        <ul className={css.ImageGallery}>
          {gellery && gellery.map(({ previewURL, id, largeImageURL }) => {
            return <ImageGalleryItem key={id} previewURL={previewURL} largeImageURL={largeImageURL} showModal={this.props.showModal}/>
          })}
        </ul>
      </>
    )
  }
}