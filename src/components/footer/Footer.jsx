import styles from './footer.module.css'
const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.logo}>
            OTAKUBLOGGER
        </div>
        <div className={styles.text}>
            © 2024 Otaku Odyssey. All rights reserved.
        </div>
    </div>
  )
}

export default Footer