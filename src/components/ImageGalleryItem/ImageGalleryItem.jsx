import css from "./ImageGalleryItem.module.css"

export const ImageGalleryItem = ({showModal, data}) => {
  const {  tags, webformatURL, largeImageURL } = data;
  return (
    <li className={css.ImageGalleryItem} >
      <img className={css.ImageGalleryItem_image}
        src={webformatURL}
        alt={tags}
        onClick={() => showModal({ largeImageURL, tags })}
      />
    </li>
  )
}