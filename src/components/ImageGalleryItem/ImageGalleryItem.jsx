import css from "./ImageGalleryItem.module.css"

export const ImageGalleryItem = ({previewURL, largeImageURL, showModal}) => {
  return (
    <li className={css.ImageGalleryItem} >
      <img className={css.ImageGalleryItem_image} src={largeImageURL} alt='' onClick={showModal} aria-modal={largeImageURL} />
    </li>
  )
}