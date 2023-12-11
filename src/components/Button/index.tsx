"use client";
import { PropsWithChildren } from "react";
import styles from "./index.module.scss";

type ButtonProps = {
  onClick?: Function;
} & PropsWithChildren;

const Button = (props: ButtonProps) => {
  return (
    <button
      className={styles.container}
      onClick={() => props.onClick && props.onClick()}
    >
      {props.children}
    </button>
  );
};

export default Button;
