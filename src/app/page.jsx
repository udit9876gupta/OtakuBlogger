import Image from 'next/image';
import styles from './home.module.css'
const Home = () => {
  return (
  <div className={styles.container}>
    <div className={styles.textContainer}>
      <h1 className={styles.title}>Otaku Odyssey: Journey Through Anime Blogs</h1>
      <p className={styles.desc}>Embark on a thrilling journey through our anime blogosphere, featuring insightful reviews, exciting discussions, and captivating analyses of your favorite shows!</p>
      <div className={styles.buttons}>
        <button className={styles.button}>Learn More</button>
        <button className={styles.button}>Contact</button>
      </div>
      <div className={styles.brands}>
        <Image src="/brands.png" alt='brands' fill className={styles.branding} unoptimized/>
      </div>
    </div>
    <div className={styles.imgContainer}>
      <Image src="/hero.png" alt="" fill className={styles.heroImg} unoptimized/>
    </div>
  </div>
  )
};

export default Home;