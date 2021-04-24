import styles from './Input.module.css'

const Input = ({value, onChange, children}) => {
    return(
        <input value={value} onChange={onChange} className={styles.input} placeholder={children}>
        </input>
    )
}

export default Input;