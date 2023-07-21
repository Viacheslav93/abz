import styles from './Radio.module.scss'


  export const RadioItem = ({position, setFieldValue, values}) => {

    console.log(position);

    return (

    <div>
        <label className={styles.label}>

              <input  
                onChange={() => setFieldValue('position', position.id )} 
                className = {styles.field}  
                type={'radio'} 
                name={'position'} 
                value={position.id} 
                checked = {values.position === position.id}
              />
              
                {position.name}
        </label>
    </div>
  )
}
