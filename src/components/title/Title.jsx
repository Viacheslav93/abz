import styles from './Title.module.scss'


export const Title = ({className, children}) => {

  return (

    <h2 className={`${styles.title} ${className}` }>
       {children}
    </h2>
  )
}