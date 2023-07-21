import styles from './Banner.module.scss'

import { useState } from 'react'

import banner from '../../assets/images/banner/banner.jpg'
import banner2 from '../../assets/images/banner/banner2.jpg'

import {Title} from '../title/Title.jsx'
import { Button } from '../ui/button/Button'
import {PostForm} from '../postForm/PostForm'
import { ModalWindow } from '../modalWindow/ModalWindow'


export const Banner = () => {

  const [modal, setModal] = useState(false)

  return (

    <div className={styles.banner}>
        <div className={`container ${styles.container}`}>

          <picture className={styles.image}>
            <source media='(max-width: 1024px)' srcSet={banner2} />
            <img src={banner} alt="banner" />
          </picture>
       
          <div className={styles.content}>
              <Title className={styles.whiteTitle}>
                   Test assignment for front-end developer
              </Title>
              <div >
                 <p>
                    What defines a good front-end developer is one that has skilled knowledge of HTML,
                    CSS, JS with a vast understanding of User design thinking as they'll be building 
                    web interfaces with accessibility in mind. They should also be excited to learn,
                    as the world of Front-End Development keeps evolving.
                </p>
              </div>
         </div>

          <Button onClick={() => setModal(true)} >Sign up</Button>
             {modal && (
                <ModalWindow setModal ={setModal}>
                <PostForm  />
                </ModalWindow>
             )}  
            
        </div>
    </div>
  )
}
