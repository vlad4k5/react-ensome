import brainCircuit from '../../assets/img/brainCircuit.svg'
import arrowTrendingLines from '../../assets/img/arrowTrendingLines.svg'
import key from '../../assets/img/key.svg'
import s from './Advantages.module.scss'

const Advantages = () => {
  return (
    <div className={s.advantagesContainer}>
      <div className={s.advantagesContent}>
        <h2>Why our clients chose Ensome?</h2>
        <p className={s.advantagesInfo}>Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
        
        <div className={s.advantagesList}>
          <div className={s.advantageItem}>
            <div className={s.icon}>
              <img src={brainCircuit} alt="Brain Circuit"/>
            </div>
            <h3>Machine learning</h3>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.</p>
          </div>

          <div className={s.advantageItem}>
            <div className={s.icon}>
              <img src={arrowTrendingLines} alt="Trending Arrow"/>
            </div>
            <h3>Embed analytics</h3>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.</p>
          </div>

          <div className={s.advantageItem}>
            <div className={s.icon}>
              <img src={key} alt="Key"/>
            </div>
            <h3>Access control</h3>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Advantages