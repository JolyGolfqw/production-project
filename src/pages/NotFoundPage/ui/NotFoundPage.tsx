import styles from "./NotFoundPage.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

import type { PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = (props: PropsWithChildren<NotFoundPageProps>) => {
  const { className } = props;

  const { t } = useTranslation();

  return (
    <div className={classNames(styles.NotFoundPage, {}, [className])}>
      {t("Страница не найдена")}
    </div>
  );
};
