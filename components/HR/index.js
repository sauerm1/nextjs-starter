import styles from "./HR.module.css";

const HR = (props) => {
	const width = props.width ? `${props.width}%` : "50%";
	const margin = props.margin ? `${props.margin}` : "0px";

	return <hr className={styles.HR} style={{ width: width, margin: margin }} />;
};

export default HR;
