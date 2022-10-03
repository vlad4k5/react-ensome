import BlueButton from '../../assets/components/Buttons/BlueButton/BlueButton'
import s from './Features.module.scss'
import illustration2 from '../../assets/img/illustration2.png'
import illustration3 from '../../assets/img/illustration3.png'

const Features = () => {
  return (
    <div className={s.features}>
      <div className={s.featureItem}>
        <div  className={s.featureDescription}>
          <h2>The newest business analytics platform</h2>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
          <BlueButton>Learn more</BlueButton>
        </div>
        <div className={s.illustrationContainer}>
          <img className={s.illustration1} src={illustration2} alt="Illustration"/>
        </div>
        
      </div>

      <div className={s.featureItem}>
      <div className={s.illustrationContainer}>
        <img className={s.illustration2} src={illustration3} alt="Illustration"/>
      </div>
        <div className={s.featureDescription}>
          <h2>Radically new data solutions</h2>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
          <BlueButton>Learn more</BlueButton>
        </div>
      </div>

    </div>
  )
}

export default Features