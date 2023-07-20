import { Component } from "react"
import { getImg } from 'services/api';
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import css from "./ImageGallery.module.css"

export class ImageGallery extends Component {

  state = {
    gellery: [],
  }

 componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchText !== this.props.searchText) {
      getImg(this.props.searchText).then(gellery => this.setState({ gellery: gellery }))
   }
  }

  render() {
    const { gellery } = this.state
    console.log(gellery);
    return (
      <>
        <ul className={css.ImageGallery}>
          {gellery && gellery.map(image => {
            return <ImageGalleryItem key={image.id} data={image} showModal={this.props.showModal}/>
          })}
        </ul>
      </>
    )
  }
}