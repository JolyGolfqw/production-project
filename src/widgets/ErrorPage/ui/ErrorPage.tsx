import { classNames } from "shared/lib/classNames/classNames";
import styles from "./ErrorPage.module.scss";

import type { PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button/Button";

interface ErrorPageProps {
  className?: string;
}

export const ErrorPage = (props: PropsWithChildren<ErrorPageProps>) => {
  const { className } = props;

  const { t } = useTranslation();

  const reloadPage = () => location.reload();

  return (
    <div className={classNames(styles.ErrorPage, {}, [className])}>
      <h3>{t("Произошла непридвиденная ошибка")}</h3>
      <Button onClick={reloadPage}>{t("Обновить страницу")}</Button>
    </div>
  );
};
