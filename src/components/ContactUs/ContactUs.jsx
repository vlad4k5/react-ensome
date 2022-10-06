import s from './ContactUs.module.scss'

const ContactUs = () => {
  return (
    <div className={s.cotactUsContainer}>
      <div className={s.contactUs}>
        <div className={s.leftSide}>
          <h2>Left questions? Contacts us now for a free consultation and free trial!</h2>
          <p className={s.description}>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.</p>
          <div className={s.contacts}>
            <div className={s.contactItem}>
              <p className={s.contactType}>Email address</p>
              <p className={s.contactInfo}>ensome@info.co.us</p>
            </div>  
            <div className={s.contactItem}>
              <p className={s.contactType}>Phone number</p>
              <p className={s.contactInfo}>+1601-201-5580</p>
            </div>  
            <div className={s.contactItem}>
              <p className={s.contactType}>Address</p>
              <p className={s.contactInfo}>1642 Washington Avenue, Jackson, MS, Mississippi, 39201</p>
            </div>  
          </div>
        </div>

        <form>
          <div className={s.contactForm}>
            <h3>Contact Us</h3>
            <div className={s.formFields}>
              <div className={s.inputItem}>
                <label for="name" className={s.inputLabel}>Name</label>
                <input className={s.input} id="name" placeholder="Andrea"></input>
              </div>
              <div className={s.inputItem}>
                <label for="name" className={s.inputLabel}>Email</label>
                <input className={s.input} id="name" placeholder="andrea@gmaol.com"></input>
              </div>
              <div className={s.inputItem}>
                <label for="name" className={s.inputLabel}>Theme</label>
                <input className={s.input} id="name" placeholder="Job"></input>
              </div>
              <div className={s.inputItem}>
                <label for="name" className={s.inputLabel}>Message</label>
                <input className={s.input} id="name" placeholder="Your message"></input>
              </div>      
            </div>
          </div>
          <button className={s.sendButton}>Send</button>
        </form>
      </div>
    </div>
  )
}

export default ContactUs