import styles from './Button.module.scss'


export const Button = ({children, className, disabled, onClick}) => {

  return (

    <button
      className={`${className ? className : styles.btn} ${disabled && styles.disabledBtn}`}
      disabled={disabled}
      onClick = {onClick}
    >
      {children}
    </button>
  )
}
