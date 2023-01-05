import { useTranslation } from "react-i18next";

import type { PropsWithChildren } from "react";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { classNames } from "shared/lib/classNames/classNames";

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher = (props: PropsWithChildren<LangSwitcherProps>) => {
  const { className, short } = props;

  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <div className={classNames("", {}, [className])}>
      <Button onClick={toggle} theme={ButtonTheme.CLEAR}>
        {t<string>(short ? "Короткий язык" : "Язык")}
      </Button>
    </div>
  );
};
