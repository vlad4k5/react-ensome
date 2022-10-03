import BlueButton from '../../assets/components/Buttons/BlueButton/BlueButton'
import WhiteButton from '../../assets/components/Buttons/WhiteButton/WhiteButton'
import s from './Blog.module.scss'

const Blog = () => {
  return (
    <div className={s.blog}>
      <div className={s.blogContainer}>
        <h2>Glad to help your success</h2>
        <div className={s.blogList}>
          <div className={s.blogItem}>
            <p className={s.date}>22 June 2020</p>
            <h3>Sed ut perspiciatis unde omnis at vero blanditils</h3>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti... </p>
            <div className={s.buttons}>
              <WhiteButton>Proxy</WhiteButton>
              <WhiteButton>VPN</WhiteButton>
            </div>
          </div>
          <div className={s.blogItem}>
            <p className={s.date}>22 June 2020</p>
            <h3>Sed ut perspiciatis unde omnis at vero blanditils</h3>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti... </p>
            <div className={s.buttons}>
              <WhiteButton>Proxy</WhiteButton>
              <WhiteButton>VPN</WhiteButton>
            </div>
          </div>
          <div className={s.blogItem}>
            <p className={s.date}>22 June 2020</p>
            <h3>Sed ut perspiciatis unde omnis at vero blanditils</h3>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti... </p>
            <div className={s.buttons}>
              <WhiteButton>Proxy</WhiteButton>
              <WhiteButton>VPN</WhiteButton>
            </div>
          </div>
        </div>
        <BlueButton>Learn more</BlueButton>
      </div>
    </div>
  )
}

export default Blog