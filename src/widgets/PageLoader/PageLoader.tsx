import { classNames } from "shared/lib/classNames/classNames";
import styles from "./PageLoader.module.scss";

import type { PropsWithChildren } from "react";
import { Loader } from "../../shared/ui/Loader/Loader";

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = (props: PropsWithChildren<PageLoaderProps>) => {
  const { className } = props;

  return <div className={classNames(styles.PageLoader, {}, [className])}>
    <Loader/>
  </div>;
};
