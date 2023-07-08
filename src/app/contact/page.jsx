import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/button/Button'

const Contact = () => {
  return (
    <div>
      <h1 className={styles.title}>Lets Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image src='/contact.png' alt='' fill={true} className={styles.img}/>
        </div>
        <div className={styles.form}>
          <input type='text' placeholder='name' className={styles.input}/>
          <input type='text' placeholder='email' className={styles.input}/>
          <textarea type='text' placeholder='message' className={styles.textarea} cols="30" rows="10"/>
          <Button url="#" text="Send"></Button>
        </div>
      </div>
    </div>
  )
}

export default Contact