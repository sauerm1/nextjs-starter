import styles from './Input.module.css'

const Input = ({value, onChange, placeholder, children}) => {
    return(
        <input value={value} onChange={onChange} className={styles.input} placeholder={placeholder}>
        </input>
    )
}

export default Input;