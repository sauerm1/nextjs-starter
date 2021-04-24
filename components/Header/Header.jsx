import styles from "./Header.module.css";
import Link from 'next/link'

const Header = ({ children }) => {
  return (
    <div className={styles.header}>
      <Link href="/">
        <a>Home</a>
      </Link>
      {children}
    </div>
  );
};

export default Header;