import styles from "./Card.module.css";
import Link from "next/link";

const Card = ({ link, title, description }) => {
	return (
		<Link href={link}>
			<div className={styles.card}>
				<a>
					<h3>{title} &rarr;</h3>
					<p>{description}</p>
				</a>
			</div>
		</Link>
	);
};

export default Card;
