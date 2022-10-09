import reviewAuthor1 from '../../assets/img/reviewAuthor1.png'
import reviewAuthor2 from '../../assets/img/reviewAuthor2.png'
import s from './CompanyReviews.module.scss'

const CompanyReviews = () => {
  return (
    <div className={s.reviews}>
      <div className={s.topBlock}>
        <h2>Trusted by the best in the business</h2>
        <div className={s.navButtons}>
          <button className={s.buttonBack} disabled>
            <svg width="22" height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.5 6.37502C0.499678 6.20584 0.536915 6.0387 0.609028 5.88565C0.681141 5.73261 0.786328 5.59748 0.917 5.49002L5.336 1.08002C5.54694 0.869345 5.83287 0.75101 6.131 0.75101C6.42913 0.75101 6.71506 0.869345 6.926 1.08002C7.03023 1.18421 7.1129 1.30792 7.16931 1.44407C7.22572 1.58022 7.25475 1.72615 7.25475 1.87352C7.25475 2.02089 7.22572 2.16682 7.16931 2.30297C7.1129 2.43912 7.03023 2.56283 6.926 2.66702L4.349 5.25002L20.375 5.25002C20.6734 5.25002 20.9595 5.36855 21.1705 5.57953C21.3815 5.79051 21.5 6.07665 21.5 6.37502C21.5 6.67339 21.3815 6.95954 21.1705 7.17052C20.9595 7.38149 20.6734 7.50002 20.375 7.50002L4.334 7.50002L6.9335 10.083C7.03795 10.1872 7.12082 10.311 7.17736 10.4473C7.2339 10.5836 7.263 10.7297 7.263 10.8773C7.263 11.0248 7.2339 11.1709 7.17736 11.3072C7.12082 11.4435 7.03795 11.5673 6.9335 11.6715C6.82902 11.7761 6.70497 11.859 6.56844 11.9156C6.4319 11.9722 6.28555 12.0013 6.13775 12.0013C5.98995 12.0013 5.8436 11.9722 5.70706 11.9156C5.57053 11.859 5.44647 11.7761 5.342 11.6715L0.829998 7.16552C0.72469 7.0627 0.641192 6.9397 0.584492 6.80388C0.527792 6.66806 0.499056 6.5222 0.5 6.37502Z" fill="#002B4E"/>
            </svg>
          </button>
          <button className={s.buttonForward}>
            <svg width="22" height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.5 6.37502C21.5003 6.20584 21.4631 6.0387 21.391 5.88565C21.3189 5.73261 21.2137 5.59748 21.083 5.49002L16.664 1.08002C16.4531 0.869346 16.1671 0.751011 15.869 0.751011C15.5709 0.751011 15.2849 0.869346 15.074 1.08002C14.9698 1.18421 14.8871 1.30792 14.8307 1.44407C14.7743 1.58022 14.7452 1.72615 14.7452 1.87352C14.7452 2.02089 14.7743 2.16682 14.8307 2.30298C14.8871 2.43913 14.9698 2.56283 15.074 2.66702L17.651 5.25002L1.625 5.25002C1.32663 5.25002 1.04048 5.36855 0.829504 5.57953C0.618526 5.79051 0.5 6.07665 0.5 6.37502C0.5 6.67339 0.618526 6.95954 0.829505 7.17052C1.04048 7.38149 1.32663 7.50002 1.625 7.50002L17.666 7.50002L15.0665 10.083C14.9621 10.1872 14.8792 10.311 14.8226 10.4473C14.7661 10.5836 14.737 10.7297 14.737 10.8773C14.737 11.0248 14.7661 11.1709 14.8226 11.3072C14.8792 11.4435 14.9621 11.5673 15.0665 11.6715C15.171 11.7761 15.295 11.859 15.4316 11.9156C15.5681 11.9722 15.7145 12.0013 15.8622 12.0013C16.01 12.0013 16.1564 11.9722 16.2929 11.9156C16.4295 11.859 16.5535 11.7761 16.658 11.6715L21.17 7.16552C21.2753 7.0627 21.3588 6.9397 21.4155 6.80388C21.4722 6.66806 21.5009 6.5222 21.5 6.37502Z" fill="#002B4E"/>
            </svg>
          </button>
        </div>
      </div>

      <div className={s.reviewList}>
        <div className={s.reviewItem}>
          <img className={s.authorPhoto} src={reviewAuthor1} alt="Author"/>
          <p className={s.reviewText}>“Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum.”
          </p>
          <span className={s.reviewAuthor}>Alex Bern</span>
          <span className={s.authorPosition}>CEO by PixelPerfect</span>
        </div>

        <div className={s.reviewItem}>
          <img className={s.authorPhoto} src={reviewAuthor2} alt="Author"/>
          <p className={s.reviewText}>“Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum.”
          </p>
          <span className={s.reviewAuthor}>Bob Turk</span>
          <span className={s.authorPosition}>CEO by NOX</span>
        </div>
      </div>
    </div>
  )
}

export default CompanyReviews