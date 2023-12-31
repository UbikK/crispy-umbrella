import Link from "next/link";
import styles from "./index.module.scss";

const Header = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <Link href="/articles">Blog</Link>
      </h1>
      <span className={styles.links}>
        <Link href="/articles">Articles</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact Us</Link>
      </span>
    </div>
  );
};

export default Header;
