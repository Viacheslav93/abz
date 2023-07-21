import styles from './styles.module.scss'


export const ModalWindow = ({children, setModal}) => {

  return (
    <div className={styles.wrapper} >
        <div onClick={() => setModal(false)} className={styles.darkScreen}></div>

        <div className={styles.modal}>
            {children}
            <button 
              onClick={() => setModal(false)} 
              className={styles.button}
            >x</button>

        </div>
    </div>
  )
}
