import s from './BlueButton.module.scss'

const BlueButton = ({children}) => {
  return (
    <button className={s.blueButton}>
      {children}
    </button>
  )
}

export default BlueButton