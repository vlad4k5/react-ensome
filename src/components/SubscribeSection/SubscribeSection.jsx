import s from './SubscribeSection.module.scss'

const SubscribeSection = () => {
  return (
    <div className={s.subscribeContainer}>
      <div className={s.subscribeSection}>
        <div className={s.subscribeInfo}>
          <h3>Subscribe to our newsletter</h3>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
        </div>
        <form>
          <input placeholder='Your email'/>
          <button>Send</button>
        </form>
      </div>
    </div>
  )
}

export default SubscribeSection