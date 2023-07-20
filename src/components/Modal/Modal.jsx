// import { Component } from "react"
import css from './Modal.module.css'

// export class Modal extends Component {

//   state = {
  
//   }

//   componentDidMount() {
//     window.addEventListener('keydown', this.handlePressESC)
//   }
//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handlePressESC)
//   }

//   handlePressESC = ({target}) => {
//     if(target.code === 'ESC') this.props.closeModal()
//   }

//   render() {
//       return (
//       <>
//       <div className={css.modal}></div>
//       </>
//     )
//   }
// }

export const Modal = ({ closeModal, img }) => {
  console.log(img);
  return (
    <div className={css.overlay} onClick={closeModal}>
      <div className={css.modal}>
        <img src={img} alt="" />
        {/* {children} */}
      </div>
    </div>
  )
}
