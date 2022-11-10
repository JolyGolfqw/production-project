import { classNames } from "shared/lib/classNames";
import { useTranslation } from "react-i18next";

import type { PropsWithChildren } from "react";
import { Button, ButtonTheme } from "shared/ui/Button/Button";

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = (props: PropsWithChildren<LangSwitcherProps>) => {
  const { className } = props;

  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <div className={classNames("", {}, [className])}>
      <Button onClick={toggle} theme={ButtonTheme.CLEAR}>
        {t<string>("Язык")}
      </Button>
    </div>
  );
};
