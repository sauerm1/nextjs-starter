import styles from "./Card.module.css";
import Link from "next/link";

const Card = ({ link, title, description }) => {
	return (
		<div className={styles.card}>
			<Link href={link}>
				<a>
					<h3>{title} &rarr;</h3>
					<p>{description}</p>
				</a>
			</Link>
		</div>
	);
};

export default Card;
