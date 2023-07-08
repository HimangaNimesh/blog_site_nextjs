import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

const Id = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit dolore quam laborum asperiores eos sit! Non aliquam inventore debitis 
            corporis error explicabo maiores consequatur, magnam temporibus obcaecati aperiam deserunt repudiandae.
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/16353919/pexels-photo-16353919/free-photo-of-fontanna-di-trevi-in-rome-italy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Banuka</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/16353919/pexels-photo-16353919/free-photo-of-fontanna-di-trevi-in-rome-italy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores eligendi harum ea blanditiis 
         cum quaerat tempore maiores sit quas hic assumenda dolorem autem, nobis voluptatibus amet quam reprehenderit facilis in?
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et rerum quae asperiores nulla, labore enim dolores porro doloribus maiores beatae 
         ex maxime consequuntur illum hic cupiditate libero. Deserunt, delectus accusantium?
        </p>
      </div>
    </div>
  )
}

export default Id