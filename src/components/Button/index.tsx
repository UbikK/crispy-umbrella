"use client";
import { PropsWithChildren } from "react";
import styles from "./index.module.scss";

type ButtonProps = {
  onClick?: Function;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
} & PropsWithChildren;

const Button = (props: ButtonProps) => {
  return (
    <button
      type={props.type ?? "button"}
      className={`${styles.container} ${props.disabled && styles.disabled}`}
      onClick={() => props.onClick && props.onClick()}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
