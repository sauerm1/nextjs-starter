import styles from "./Header.module.css";
import Link from "next/link";
import useAuthStore from "../../store/persistStore";


const Header = ({ children }) => {
  const user = useAuthStore((state) => state.user);

  return (
    <div className={styles.header}>
      <div className={styles.alignleft}>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
      <div className={styles.aligncenter}>{children}</div>
      <div className={styles.alignright}>
        {user? <div><Link href="/demo/login">{user}</Link></div>:<Link href="/demo/login">Log In</Link>}
      </div>
    </div>
  );
};

export default Header;
