import Link from "next/link";
import styles from "./index.module.scss";

const Header = () => {
  return (
    <div className={styles.container}>
      <h1>
        <Link href="/articles">Blog</Link>
      </h1>
      <span className={styles.links}>
        <Link href="/articles">Articles</Link>
        <Link href="/about">About</Link>
      </span>
    </div>
  );
};

export default Header;
