import BlueButton from '../../assets/components/Buttons/BlueButton/BlueButton'
import illustration1 from '../../assets/img/illustration1.png'
import clientLogo1 from '../../assets/img/clientLogo1.png'
import clientLogo2 from '../../assets/img/clientLogo2.png'
import clientLogo3 from '../../assets/img/clientLogo3.png'
import clientLogo4 from '../../assets/img/clientLogo4.png'
import clientLogo5 from '../../assets/img/clientLogo5.png'
import clientLogo6 from '../../assets/img/clientLogo6.png'
import s from './Benefits.module.scss'


const Benefits = () => {
  return (
    <div>
      <div className={s.topContent}>
        <div className={s.benefitsDescription}>
          <h2>Find true power in your data with Ensome</h2>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
          <div className={s.buttons}>
            <BlueButton>Learn more</BlueButton>
            <button className={s.transparrentButton}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.2769 10.4546C14.0523 10.3249 13.7975 10.2567 13.5382 10.2567C13.2788 10.2568 13.0241 10.3251 12.7995 10.4548C12.575 10.5846 12.3886 10.7711 12.259 10.9958C12.1294 11.2204 12.0613 11.4753 12.0615 11.7346V20.2673C12.0613 20.5266 12.1294 20.7814 12.259 21.0061C12.3886 21.2307 12.575 21.4173 12.7995 21.547C13.0241 21.6768 13.2788 21.7451 13.5382 21.7451C13.7975 21.7452 14.0523 21.6769 14.2769 21.5473L22.3999 16.8526C22.5496 16.7662 22.6739 16.6419 22.7603 16.4922C22.8467 16.3425 22.8922 16.1728 22.8922 15.9999C22.8922 15.8271 22.8467 15.6573 22.7603 15.5077C22.6739 15.358 22.5496 15.2337 22.3999 15.1473L14.2769 10.4546ZM0.246094 15.9999C0.246094 11.8218 1.90587 7.81471 4.86029 4.86029C7.81471 1.90587 11.8218 0.246094 15.9999 0.246094C20.1781 0.246094 24.1852 1.90587 27.1396 4.86029C30.094 7.81471 31.7538 11.8218 31.7538 15.9999C31.7538 20.1781 30.094 24.1852 27.1396 27.1396C24.1852 30.094 20.1781 31.7538 15.9999 31.7538C11.8218 31.7538 7.81471 30.094 4.86029 27.1396C1.90587 24.1852 0.246094 20.1781 0.246094 15.9999V15.9999ZM15.9999 2.21532C14.1897 2.21532 12.3972 2.57187 10.7248 3.26462C9.05237 3.95736 7.53276 4.97272 6.25274 6.25274C4.97272 7.53276 3.95736 9.05237 3.26462 10.7248C2.57187 12.3972 2.21532 14.1897 2.21532 15.9999C2.21532 17.8102 2.57187 19.6027 3.26462 21.2751C3.95736 22.9475 4.97272 24.4671 6.25274 25.7471C7.53276 27.0272 9.05237 28.0425 10.7248 28.7353C12.3972 29.428 14.1897 29.7846 15.9999 29.7846C19.6558 29.7846 23.162 28.3323 25.7471 25.7471C28.3323 23.162 29.7846 19.6558 29.7846 15.9999C29.7846 12.344 28.3323 8.83786 25.7471 6.25274C23.162 3.66763 19.6558 2.21532 15.9999 2.21532Z" fill="#292D33"/>
              </svg>
              Watch the demo
            </button>
          </div>
        </div>
        <img className={s.illustration} src={illustration1} alt="Illustration"/>
      </div>

      <div className={s.bottomContent}>
        <ul>
          <li><a href="https://www.willowood.com/"><img src={clientLogo1} alt="Willo Wood"/></a></li>
          <li><a href="https://applerush.com/"><img src={clientLogo2} alt="Apple Rush"/></a></li>
          <li><a href="https://www.htwebsitedesigns.com/"><img src={clientLogo3} alt="HT"/></a></li>
          <li><a href="https://avgroup.pro/"><img src={clientLogo4} alt="AV Group"/></a></li>
          <li><a href="https://github.com/vlad4k5"><img src={clientLogo5} alt="Hard 2 Ignore"/></a></li>
          <li><a href="https://fairtech.group/"><img src={clientLogo6} alt="Fairtech"/></a></li>
        </ul>
      </div>
      
    </div>
  )
}

export default Benefits