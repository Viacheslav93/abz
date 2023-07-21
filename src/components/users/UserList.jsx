import styles from './User.module.scss'

import React, { useContext, useEffect, useRef, useState } from 'react'

import { usersData } from '../../servisec/userServices.js'
import { UserItem } from './UserItem'
import { Title } from '../title/Title'
import { Button } from '../ui/button/Button'
import { Preloader } from '../preloader/Preloader'
import { scrollToBlock } from '../../utils/scrollToBlock'
import contextApp from '../../context/ContextApp'


export const UserList = ({users, setUsers}) => {
    
    const [isLoading, setIsLoading] = useState(false)
    const [limit, setLimit] = useState(6)
    const [totalPage, setTotalPage] = useState(0)

    const {userRef,  currentPage, setCurrentPage,} = useContext(contextApp)
    const showRef = useRef(null)

    const status ='false'

    useEffect(() => {

        const getUsers = async () => {

            setIsLoading(true)

            try {
                    const res  = await usersData.getAllUsers(currentPage, limit)
                    setIsLoading(false)
                     setUsers(prev => [...prev, ...res.users])
                     setTotalPage(res.total_pages)
            } catch (error) {
                setIsLoading(false)
                console.log(error);
            }
        }

        getUsers()

    }, [currentPage])

    const loadPage = () => {

      setCurrentPage(prev => prev +1)

      scrollToBlock(showRef)

    }

  return (

    <div  className={styles.users}>

        <div ref={userRef} className={`container ${styles.container}` }>
            <Title>
               Working with GET request
            </Title>

              <div  className={styles.cards}>

                 {users.map(user => <UserItem key={user.id} {...user} />)}
                 <div ref ={showRef}></div>
              </div> 
              
             {isLoading && <Preloader/>} 
            
            {currentPage < totalPage && (
                <Button onClick={loadPage} >Show more</Button>
            )}
            
        </div>
    </div>
  )
}
