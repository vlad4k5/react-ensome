import s from './WhiteButton.module.scss'

const WhiteButton = ({children}) => {
  return (
    <button className={s.whiteButton}>
      {children}
    </button>
  )
}

export default WhiteButton