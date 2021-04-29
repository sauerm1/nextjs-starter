import styles from "./HR.module.css";

const HR = (props) => {
	const width = props.width ? `${props.width}%` : "50%";
	return <hr style={{ width: width }} />;
};

export default HR;
