import Header from "@/components/Header";
import { PropsWithChildren } from "react";
import styles from "./main.module.scss";
export default function Layout(props: PropsWithChildren) {
  return (
    <>
      <Header />
      <main className={styles.main}>{props.children}</main>
    </>
  );
}
