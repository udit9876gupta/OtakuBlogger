import Image from 'next/image'
import styles from './contact.module.css'

export const metadata = {
  title: 'Contact Page',
  description: 'Contact Description',
}
const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="" fill className={styles.img} unoptimized/>        
      </div>
      <div className={styles.formContainer}>
        <form action='' className={styles.form}>
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Your Email' />
          <input type="text" placeholder='Phone Number (Optional)'/>
          <textarea placeholder='Your Message' name='' id='' cols="30" rows="10" />
          <button type='submit' className={styles.button}>Send</button>
        </form>
      </div>
    </div>
  )
}

export default ContactPage