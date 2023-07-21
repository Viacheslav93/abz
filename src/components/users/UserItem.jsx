
import { Tooltip } from '../tooltip/Tooltip'
import styles from './User.module.scss'

export const UserItem = ({id, name, email, phone, position, photo}) => {

  const info = [position, email, phone]

  return (

    <div   className={styles.card}>

      <img className={styles.photo} src={photo} alt='userPhoto' />

       {name?.length > 15 
          ? 
          <Tooltip content={name}>
              <p>
                {name.slice(0, 20) + '...'}
              </p>
          </Tooltip> 
          : 
          name
        }   
       <div>

         {info?.map((el, i) =>
            <div key={i}>
              {el?.length > 10 
                ? 
                <Tooltip content={el}>
                  <p>
                    {el?.slice(0, 20) + '...'}
                  </p>
                </Tooltip> 
                : 
                el
              }
            </div>
          )}
       </div>
    </div>
  )
}
