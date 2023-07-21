import styles from './Tooltip.module.scss'

import { useState } from 'react'


export const Tooltip = ({children, content}) => {

    const [show, setShow] = useState(false)

  return (
    <div className={styles.tool}>

      <div onClick={() => setShow(prev => !prev)} >
          {children}
      </div>
    
      <div className={`${styles.content} ${show ? styles.showContent : ''}`}>
          {content}
      </div>
    </div>
    
  )
}
