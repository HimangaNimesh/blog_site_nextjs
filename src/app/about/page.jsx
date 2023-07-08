import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/button/Button'

const About = () => {
  return (
    <div>
      <div className={styles.imgContainer}>
        <Image 
        alt='' 
        src='https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        fill={true}
        className={styles.img}
        />
        <div className={styles.imgText}> 
          <h1>Digital Storytellers</h1>
          <h2 className={styles.desc}>Handcrafting award winning digital experiences</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
              <h1 className={styles.title}>Who Are We?</h1>
              <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur, natus hic? Qui impedit optio tenetur mollitia nihil repellendus consequatur, 
                sunt expedita explicabo quos illum quod aliquam cumque obcaecati tempora ducimus.
                <br/>
                <br/>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, quisquam totam cupiditate nostrum rem impedit 
                quaerat ex aperiam voluptate doloribus laudantium molestias corporis magni corrupti minima eveniet possimus repudiandae similique.
              </p>
        </div>
        <div className={styles.item}>
            <h1 className={styles.title}>What We Do?</h1>
            <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur, natus hic? Qui impedit optio tenetur mollitia nihil repellendus consequatur, 
                sunt expedita explicabo quos illum quod aliquam cumque obcaecati tempora ducimus.
                <br/>
                <br/>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, quisquam totam cupiditate nostrum rem impedit 
                quaerat ex aperiam voluptate doloribus laudantium molestias corporis magni corrupti minima eveniet possimus repudiandae similique.
            </p>
            <Button url="/contact" text="Contact Us"/>
        </div>
      </div>
    </div>
  )
}

export default About