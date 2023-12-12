import SideBar from "@/components/Sidebar";
import { SessionProvider } from "next-auth/react";
import { PropsWithChildren } from "react";
import styles from "./index.module.scss";

export default function Layout(props: PropsWithChildren) {
  return (
    <SessionProvider>
      <div className={styles.adminPanel}>
        <SideBar />
        <div className={styles.content}>{props.children}</div>
      </div>
    </SessionProvider>
  );
}
