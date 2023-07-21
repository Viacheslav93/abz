import { Field } from 'formik'
import styles from './InputField.module.scss'
import { useState } from 'react'


export const InputField = ({placeholder, className, name, error, helper, label, type}) => {

  const [focus, setFocus] = useState(false)


  return (

    <div className={styles.inputWrapper}>

      <label  
        className={`
          ${styles.inputLabel} 
          ${error ? styles.error : ''} 
          ${focus ? styles.hover : ''}`
        }
        >{label}</label>

        <Field 
          onMouseEnter = {() => setFocus(true)}
          onMouseLeave={(e) => {
               if(!e.target.value){
                  setFocus(false);
                }
             }}
          name= {name}
          className={ `
            ${styles.input}
            ${className} 
            ${error ? styles.errorInput: '' }
          `}
          placeholder = {placeholder}
          type ={type}
        />
        <span 
           className={`
              ${styles.helpers} 
              ${error ? styles.error : ''}`}
              
           >{error ? error : helper}</span>
    </div>
  )
}
