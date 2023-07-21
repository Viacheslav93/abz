import styles from './Header.module.scss'

import { Link } from 'react-router-dom'

import { useContext} from 'react'

import logo from '../../assets/images/header/Logo.svg'
import {Button} from '../ui/button/Button.jsx'
import { scrollToBlock } from '../../utils/scrollToBlock'
import contextApp from '../../context/ContextApp'


export const Header = () => {

  const {userRef, signUpRef} = useContext(contextApp)

  return (

    <header className={styles.header}>
      <div className={`container ${styles.container}`}>

        <div className={styles.logo}>
          <Link to={'/'}><img src={logo} alt="logo" /></Link>  
        </div>

        <div className={styles.buttons} >
          
        <Button 
        onClick={() => scrollToBlock(userRef)}
        >Users</Button>

        <Button 
        onClick = {() => scrollToBlock(signUpRef)}
        >Sign up</Button>

        </div>
      </div>  
    </header>
  )
}
