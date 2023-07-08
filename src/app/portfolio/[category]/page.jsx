import React from 'react'
import styles from './page.module.css'
import Button from '@/components/button/Button'
import Image from 'next/image'

const Category = ({params}) => {
  return (
    <div>
        <h1 className={styles.catTitle}>{params.category}</h1>
        <div className={styles.item}>
            <div className={styles.content}>
                <h1 className={styles.title}>Title</h1>
                <p className={styles.desc}>desc</p>
                <Button url="#" text="See More"/>
            </div>
            <div className={styles.imgContainer}>
                <Image 
                    fill={true}
                    className={styles.img}
                    src="https://images.pexels.com/photos/16353919/pexels-photo-16353919/free-photo-of-fontanna-di-trevi-in-rome-italy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=''
                />
            </div>
        </div>
        <div className={styles.item}>
            <div className={styles.content}>
                <h1 className={styles.title}>Title</h1>
                <p className={styles.desc}>desc</p>
                <Button url="#" text="See More"/>
            </div>
            <div className={styles.imgContainer}>
                <Image 
                    fill={true}
                    className={styles.img}
                    src="https://images.pexels.com/photos/16353919/pexels-photo-16353919/free-photo-of-fontanna-di-trevi-in-rome-italy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=''
                />
            </div>
        </div>
    </div>
  )
}

export default Category