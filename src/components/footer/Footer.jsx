import React from 'react'
import styles from './Footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
        <div>©2023 HimangaNimesh. All rights reserved.</div>
        <div className={styles.socials}>
            <Image src="/fb.png" alt='' width={15} height={15} className={styles.icon}/>
            <Image src="/insta.png" width={15} height={15} className={styles.icon} alt='insta logo'/>
            <Image src="/tweater.png" width={15} height={15} className={styles.icon} alt='tweater logo'/>
            <Image src="/utube.png" width={15} height={15} className={styles.icon}  alt='utube logo'/>
        </div>
    </div>
  )
}

export default Footer