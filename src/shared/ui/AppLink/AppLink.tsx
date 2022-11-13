import { FC } from "react";
import { LinkProps, Link } from "react-router-dom";

import { classNames } from "shared/lib/classNames/classNames";
import styles from "./AppLink.module.scss";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const { className, children, to, theme = AppLinkTheme.PRIMARY, ...otherProps } = props;

  return (
    <Link to={to} {...otherProps} className={classNames(styles.AppLink, {}, [className, styles[theme]])}>
      {children}
    </Link>
  );
};
