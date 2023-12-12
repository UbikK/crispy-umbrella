import type { Metadata } from "next";
import styles from "./globals.module.scss";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={styles.html}>
      <body className={styles.body}>{children}</body>
    </html>
  );
}
