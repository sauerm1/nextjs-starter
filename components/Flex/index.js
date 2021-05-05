import styles from "./Flex.module.css";

const Flex = (props) => {
	return <div className={styles.parent}>{props.children}</div>;
};

export default Flex;
