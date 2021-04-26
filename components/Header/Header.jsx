import styles from "./Header.module.css";
import Link from "next/link";

const Header = ({ children }) => {
  return (
    <div className={styles.header}>
            <div className={styles.alignleft}>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
      <div className={styles.aligncenter}>{children}</div>

    </div>
  );
};

export default Header;
