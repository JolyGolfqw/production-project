import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Button.module.scss";

import type { ButtonHTMLAttributes, FC } from "react";

export enum ButtonTheme {
  CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, children, theme, ...otherProps } = props;

  return (
    <button
      {...otherProps}
      className={classNames(styles.Button, {}, [className, styles[theme]])}
    >
      {children}
    </button>
  );
};
