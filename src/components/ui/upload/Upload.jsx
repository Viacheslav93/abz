
import { InputField } from '../inputField/InputField'
import styles from './Upload.module.scss'


export const Upload = ({error, form, field, onChange }) => {
       return (
      
        <div className={styles.upload}>
            <InputField 
              className={styles.hidden}
              type= {'file'}
              name={field.name}
              onChange={e => onChange(field.name, e.target.files[0])}
            />

            <button className={styles.button}>Upload</button>

            <InputField 
              className={styles.inputUpload}
              placeholder={'Upload your photo'}
              name={field.name}
            />
            <span 
               className={`
                  ${styles.helpers} 
                  ${error && styles.error}
               `}>{error}</span>
        </div>
      )
    }