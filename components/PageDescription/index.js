import HR from "../HR"
import styles from "./PageDescription.module.css";
const PageDescription = ({title, description}) => {
    return (
        <>
        <h1>{title}</h1>
        <div className={styles.descriptionText}>
          {description} 
        </div>
        <HR/>
        </>
    )
}

export default PageDescription;