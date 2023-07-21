import styles from './InputFile.module.scss'

import download from '../../../assets/images/download.svg'

export const InputFile = ({error, value,  name, onBlur, setFieldValue, helper }) => {

  return (

    <div className={styles.wrapper}>
        <input 
          className={styles.input}
          placeholder={'Upload your photo'}

        />
        <input
            onChange={(e) => setFieldValue('upload', e.target.files[0])}
            onBlur={onBlur}
            error={error} 
            className={styles.file}
            type={'file'}
            name={name}
            helper={helper}
        />
         <span 
           className={`
              ${styles.helpers} 
              ${error ? styles.error : ''}

          `}>{error ? error : helper}</span>

        <img 
          className={styles.download} 
          src={download} 
          alt="download" 
        />
        
    </div>
  )
}
