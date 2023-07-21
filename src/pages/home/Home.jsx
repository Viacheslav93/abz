import styles from './Home.module.scss'
import '../../styles/global.scss'

import { Banner } from '../../components/banner/Banner'
import {UserList} from '../../components/users/UserList'
import { PostForm } from '../../components/postForm/PostForm'
import { useState } from 'react'


export const Home = () => {

  const [users, setUsers] = useState([])

  return (

    <div className={styles.home}>

      <Banner />
      <UserList users={users} setUsers={setUsers} />
      <PostForm setUsers = {setUsers}/>
      
    </div>
  )
}
