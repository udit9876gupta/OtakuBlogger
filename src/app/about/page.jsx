import Image from "next/image"
import styles from './about.module.css'

export const metadata = {
    title: 'About Page',
    description: 'Anime Blog Website',
  }

const AboutPage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.textContainer}>
            <h2 className={styles.subTitle}>About Agency</h2>
            <h1 className={styles.title}> 
            Unveiling the Story Behind Our Anime Odyssey
            </h1>
            <p className={styles.desc}>
            Step behind the curtain and uncover the driving force of our anime blog. Discover the diverse voices, shared passions, and vibrant community shaping our odyssey. Join us as we journey through the depths of anime fandom, celebrating creativity, insight, and the power of shared experience.
            </p>
            <div className={styles.boxes}>
                <div className={styles.box}>
                    <h1>10 K+</h1>
                    <p>Year of Experience</p>
                </div>
                <div className={styles.box}>
                    <h1>10 K+</h1>
                    <p>Year of Experience</p>
                </div>
                <div className={styles.box}>
                    <h1>10 K+</h1>
                    <p>Year of Experience</p>
                </div>
            </div>
        </div>
        <div className={styles.imgContainer}>
            <Image src="/aboutpage.png" alt="" fill className={styles.img} unoptimized/>
        </div>
    </div>
  )
}

export default AboutPage