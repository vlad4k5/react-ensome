import s from './CompanyOverview.module.scss'

const CompanyOverview = () => {
  return (
    <div className={s.overviewContainer}>
      <div className={s.overviewList}>
        <div className={s.overviewItem}>
          <div className={s.amount}>1830+</div>
          <p>Project executed</p>
        </div>
        
        <div className={s.overviewItem}>
          <div className={s.amount}>220</div>
          <p>Data analytics</p>
        </div>

        <div className={s.overviewItem}>
          <div className={s.amount}>390</div>
          <p>Data management</p>
        </div>

        <div className={s.overviewItem}>
          <div className={s.amount}>834+</div>
          <p>Satisfied customers</p>
        </div>

      </div>
    </div>
  )
}

export default CompanyOverview