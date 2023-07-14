import css from "./Searchbar.module.css"

export const Searchbar = ({onInput}) => {
  return (
    <>
      <div className={css.search_block }>
        <input onInput={onInput} className={css.input} type="text" />
      </div>
    </>
  )
}