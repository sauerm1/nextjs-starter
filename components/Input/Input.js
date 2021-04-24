import styles from './Input.module.css'

export const Input = ({children}) => {
    return(
        <input className={styles.input} placeholder={children}>
        </input>
    )
}