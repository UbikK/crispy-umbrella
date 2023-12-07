import Image from "next/image";
import styles from "./index.module.scss";

type CardProps = {
  title: string;
  img?: string | null;
  content?: string;
};

const Card = (props: CardProps) => {
  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <h3>{props.title}</h3>
      </header>
      {props.img && (
        <Image
          className={styles.img}
          src={props.img}
          alt={props.title}
          width={200}
          height={200}
        />
      )}
      <div className={styles.content}>
        <p>{props.content}</p>
      </div>
    </article>
  );
};

export default Card;
