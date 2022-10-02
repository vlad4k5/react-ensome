import s from './Header.module.scss'
import logo from '../../assets/img/logo.svg'
import play from '../../assets/img/play.svg'

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.headerContent}>
        <img src={logo} alt="Ensome"/>

        <nav>
          <ul>
            <li className={s.navItem}><a className={s.active} href='./'>Home</a></li>
            <li className={s.navItem}><a href='./'>Solutions</a></li>
            <li className={s.navItem}><a href='./'>Pages</a></li>
            <li className={s.navItem}><a href='./'>Elements</a></li>
            <li className={s.navItem}><a href='./'>Blog</a></li>
            <li className={s.navItem}><a href='./'>Contacts</a></li>
          </ul>
        </nav>

        <button className={s.blueButton}>
          <img src={play} alt="Play"/>
          Watch the demo
        </button>
      </div>
    </header>
  )
}

export default Header