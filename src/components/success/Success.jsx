import { useEffect } from 'react'

import {Title} from '../title/Title'

import image from '../../assets/images/success/success.svg'


export const Success = ({seIsSuccess}) => {

  useEffect(() => {
    setTimeout(() => {
       seIsSuccess(false)
    },2000)
  },[])

  return (

    <div>
        <Title>
           User successfully registered
        </Title> 
        
        <img src={image} alt="success" />
    </div>
  )
}
