import { Component } from "react";
import { getImg } from "services/api";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import css from "./ImageGallery.module.css";

export class ImageGallery extends Component {
  state = {
    gallery: [],
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchText !== this.props.searchText) {
      await getImg(this.props.searchText).then((gallery) =>
        this.setState({ gallery: gallery })
      );

      this.props.showButton();
    }
  }

  render() {
    const { gallery } = this.state;
    console.log(gallery);
    return (
      <>
        <ul className={css.ImageGallery}>
          {gallery &&
            gallery.map((image) => {
              return (
                <ImageGalleryItem
                  key={image.id}
                  data={image}
                  showModal={this.props.showModal}
                />
              );
            })}
        </ul>
      </>
    );
  }
}