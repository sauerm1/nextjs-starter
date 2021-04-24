import styles from './Page.module.css'
import Link from 'next/link'

export const Page = ({children}) => {
    return(
		<div className={styles.container}>
			<Link href="/">
				<a>Home</a>
			</Link>
			{children}
		</div>
    )
}