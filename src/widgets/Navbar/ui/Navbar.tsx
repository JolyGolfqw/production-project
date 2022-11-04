import { classNames } from "shared/lib/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import styles from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(styles.Navbar, {}, [className])}>
      <ThemeSwitcher/>
      <div className={styles.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={styles.mainLink}>
          Главная
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY}  to="/about">О нас</AppLink>
      </div>
    </div>
  );
};
