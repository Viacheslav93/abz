import { useEffect, useState } from 'react'
import styles from './Radio.module.scss'

import { RadioItem } from './RadioItem'
import { usersData } from '../../../servisec/userServices'

export const RadioList = ({values, setFieldValue}) => {

  const [positions, setPositions] = useState([])

  useEffect(() => {

    const getpositions = async() => {

        const res = await usersData.getPositionUser()
        setPositions(res)
    }

    getpositions()
    
  }, [])

  console.log(positions);

  return (
    <div className={styles.radio}>

        <h3 className= {styles.title}>Select your position</h3>

        <div className={styles.radioGroup} role="group" aria-labelledby="my-radio-group">

            {positions.map(position => 
               <RadioItem 
                  key={position.id} 
                  position={position}
                  setFieldValue={setFieldValue}
                  values={values}
              />
            )}
          </div>
    </div>
  )
}
