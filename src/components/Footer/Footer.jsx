import logo from '../../assets/img/logo.svg'
import logoFacebook from '../../assets/img/logoFacebook.svg'
import logoTwitter from '../../assets/img/logoTwitter.svg'
import logoLinkedin from '../../assets/img/logoLinkedin.svg'
import logYoutube from '../../assets/img/logYoutube.svg'
import logoDribbble from '../../assets/img/logoDribbble.svg'
import logoBehance from '../../assets/img/logoBehance.svg'
import s from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={s.footerContainer}>
      <footer>
        <div className={s.navigation}>
          <img src={logo} alt="Ensome"/>
          <nav>
            <div className={s.navSection}>
              <h4>About</h4>
              <a className={s.active} href="./">Home</a>
              <a href="./">About Us</a>
              <a href="./">Services</a>
              <a href="./">Solutions</a>
            </div>
            <div className={s.navSection}>
              <h4>Information</h4>
              <a href="./">Contacts</a>
              <a href="./">Our team</a>
              <a href="./">Blog</a>
              <a href="./">FAQ</a>
            </div>
            <div className={s.navSection}>
              <h4>Service</h4>
              <a href="./">Pages</a>
              <a href="./">Elements</a>
              <a href="./">Site map</a>
              <a href="./">Pricing</a>
              <a href="./">FAQ</a>
            </div>
          </nav>
        </div>

        <div className={s.contactsContainer}>
          <div className={s.contacts}>
            <div className={s.contactsSection}>
              <h4>Contacts</h4>
              <span>+1 601-201-5580</span>
              <a href="ensome@info.co.us">
                ensome@info.co.us 
                <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 4.24989C14.0002 4.1371 13.9754 4.02568 13.9273 3.92365C13.8792 3.82162 13.8091 3.73153 13.722 3.65989L10.776 0.719893C10.6354 0.579442 10.4448 0.500552 10.246 0.500552C10.0472 0.500552 9.85662 0.579442 9.716 0.719893C9.64652 0.789354 9.5914 0.871823 9.55379 0.96259C9.51619 1.05336 9.49683 1.15064 9.49683 1.24889C9.49683 1.34714 9.51619 1.44443 9.55379 1.53519C9.5914 1.62596 9.64652 1.70843 9.716 1.77789L11.434 3.49989L0.75 3.49989C0.551087 3.49989 0.360322 3.57891 0.21967 3.71956C0.0790174 3.86022 -1.72649e-07 4.05098 -1.63954e-07 4.24989C-1.5526e-07 4.44881 0.0790174 4.63957 0.21967 4.78022C0.360322 4.92087 0.551087 4.99989 0.75 4.99989L11.444 4.99989L9.711 6.72189C9.64137 6.79137 9.58612 6.8739 9.54843 6.96476C9.51073 7.05562 9.49133 7.15302 9.49133 7.25139C9.49133 7.34976 9.51073 7.44716 9.54843 7.53802C9.58612 7.62888 9.64137 7.71141 9.711 7.78089C9.78065 7.85059 9.86335 7.90587 9.95438 7.9436C10.0454 7.98132 10.143 8.00073 10.2415 8.00073C10.34 8.00073 10.4376 7.98132 10.5286 7.9436C10.6196 7.90587 10.7023 7.85059 10.772 7.78089L13.78 4.77689C13.8502 4.70834 13.9059 4.62635 13.9437 4.5358C13.9815 4.44525 14.0006 4.34801 14 4.24989Z" fill="#292D33"/>
                </svg>
              </a>
            </div>
            <div className={s.contactsSection}>
              <span>1642 Washington Avenue, Jackson, MS, 39201</span>
              <a href="ensome@info.co.us">
                Driving derections
                <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 4.24989C14.0002 4.1371 13.9754 4.02568 13.9273 3.92365C13.8792 3.82162 13.8091 3.73153 13.722 3.65989L10.776 0.719893C10.6354 0.579442 10.4448 0.500552 10.246 0.500552C10.0472 0.500552 9.85662 0.579442 9.716 0.719893C9.64652 0.789354 9.5914 0.871823 9.55379 0.96259C9.51619 1.05336 9.49683 1.15064 9.49683 1.24889C9.49683 1.34714 9.51619 1.44443 9.55379 1.53519C9.5914 1.62596 9.64652 1.70843 9.716 1.77789L11.434 3.49989L0.75 3.49989C0.551087 3.49989 0.360322 3.57891 0.21967 3.71956C0.0790174 3.86022 -1.72649e-07 4.05098 -1.63954e-07 4.24989C-1.5526e-07 4.44881 0.0790174 4.63957 0.21967 4.78022C0.360322 4.92087 0.551087 4.99989 0.75 4.99989L11.444 4.99989L9.711 6.72189C9.64137 6.79137 9.58612 6.8739 9.54843 6.96476C9.51073 7.05562 9.49133 7.15302 9.49133 7.25139C9.49133 7.34976 9.51073 7.44716 9.54843 7.53802C9.58612 7.62888 9.64137 7.71141 9.711 7.78089C9.78065 7.85059 9.86335 7.90587 9.95438 7.9436C10.0454 7.98132 10.143 8.00073 10.2415 8.00073C10.34 8.00073 10.4376 7.98132 10.5286 7.9436C10.6196 7.90587 10.7023 7.85059 10.772 7.78089L13.78 4.77689C13.8502 4.70834 13.9059 4.62635 13.9437 4.5358C13.9815 4.44525 14.0006 4.34801 14 4.24989Z" fill="#292D33"/>
                </svg>
              </a>
            </div>
          </div>
          <div className={s.social}>
            <h4>Social</h4>
            <div className={s.socialList}>
              <a href="./"><img src={logoFacebook} alt="Facebook"/></a>
              <a href="./"><img src={logoTwitter} alt="Twitter"/></a>
              <a href="./"><img src={logoLinkedin} alt="Linkedin"/></a>
              <a href="./"><img src={logYoutube} alt="Youtube"/></a>
              <a href="./"><img src={logoDribbble} alt="Dribbble"/></a>
              <a href="./"><img src={logoBehance} alt="Behance"/></a>
            </div>
          </div>
        </div>
        <div className={s.additinalInfo}>
          <div className={s.links}>
            <a href="./">
              Privacy policy
              <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 4.24989C14.0002 4.1371 13.9754 4.02568 13.9273 3.92365C13.8792 3.82162 13.8091 3.73153 13.722 3.65989L10.776 0.719893C10.6354 0.579442 10.4448 0.500552 10.246 0.500552C10.0472 0.500552 9.85662 0.579442 9.716 0.719893C9.64652 0.789354 9.5914 0.871823 9.55379 0.96259C9.51619 1.05336 9.49683 1.15064 9.49683 1.24889C9.49683 1.34714 9.51619 1.44443 9.55379 1.53519C9.5914 1.62596 9.64652 1.70843 9.716 1.77789L11.434 3.49989L0.75 3.49989C0.551087 3.49989 0.360322 3.57891 0.21967 3.71956C0.0790174 3.86022 -1.72649e-07 4.05098 -1.63954e-07 4.24989C-1.5526e-07 4.44881 0.0790174 4.63957 0.21967 4.78022C0.360322 4.92087 0.551087 4.99989 0.75 4.99989L11.444 4.99989L9.711 6.72189C9.64137 6.79137 9.58612 6.8739 9.54843 6.96476C9.51073 7.05562 9.49133 7.15302 9.49133 7.25139C9.49133 7.34976 9.51073 7.44716 9.54843 7.53802C9.58612 7.62888 9.64137 7.71141 9.711 7.78089C9.78065 7.85059 9.86335 7.90587 9.95438 7.9436C10.0454 7.98132 10.143 8.00073 10.2415 8.00073C10.34 8.00073 10.4376 7.98132 10.5286 7.9436C10.6196 7.90587 10.7023 7.85059 10.772 7.78089L13.78 4.77689C13.8502 4.70834 13.9059 4.62635 13.9437 4.5358C13.9815 4.44525 14.0006 4.34801 14 4.24989Z" fill="#9497A1"/>
              </svg>
            </a>
            <a href="./">
              Terms of us
              <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 4.24989C14.0002 4.1371 13.9754 4.02568 13.9273 3.92365C13.8792 3.82162 13.8091 3.73153 13.722 3.65989L10.776 0.719893C10.6354 0.579442 10.4448 0.500552 10.246 0.500552C10.0472 0.500552 9.85662 0.579442 9.716 0.719893C9.64652 0.789354 9.5914 0.871823 9.55379 0.96259C9.51619 1.05336 9.49683 1.15064 9.49683 1.24889C9.49683 1.34714 9.51619 1.44443 9.55379 1.53519C9.5914 1.62596 9.64652 1.70843 9.716 1.77789L11.434 3.49989L0.75 3.49989C0.551087 3.49989 0.360322 3.57891 0.21967 3.71956C0.0790174 3.86022 -1.72649e-07 4.05098 -1.63954e-07 4.24989C-1.5526e-07 4.44881 0.0790174 4.63957 0.21967 4.78022C0.360322 4.92087 0.551087 4.99989 0.75 4.99989L11.444 4.99989L9.711 6.72189C9.64137 6.79137 9.58612 6.8739 9.54843 6.96476C9.51073 7.05562 9.49133 7.15302 9.49133 7.25139C9.49133 7.34976 9.51073 7.44716 9.54843 7.53802C9.58612 7.62888 9.64137 7.71141 9.711 7.78089C9.78065 7.85059 9.86335 7.90587 9.95438 7.9436C10.0454 7.98132 10.143 8.00073 10.2415 8.00073C10.34 8.00073 10.4376 7.98132 10.5286 7.9436C10.6196 7.90587 10.7023 7.85059 10.772 7.78089L13.78 4.77689C13.8502 4.70834 13.9059 4.62635 13.9437 4.5358C13.9815 4.44525 14.0006 4.34801 14 4.24989Z" fill="#9497A1"/>
              </svg>
            </a>
          </div>
          
          <span className={s.copyright}>© 2022 Ensome. All Rights Reserved.</span>
        </div>
      </footer>
    </div>
  )
}

export default Footer