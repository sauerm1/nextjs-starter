import styles from "./Box.module.css";

const Box = ({children, onClick }) => {
  return (
    <div onClick={onClick} className={styles.box}>
      {children}
    </div>
  );
};

export default Box;
