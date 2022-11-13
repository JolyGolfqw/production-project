import { classNames } from 'shared/lib/classNames/classNames';
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'

import type { PropsWithChildren } from 'react';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = (props: PropsWithChildren<ThemeSwitcherProps>) => {
  const { className } = props;

  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('', {}, [className])}>
      <Button theme={ButtonTheme.CLEAR} onClick={toggleTheme}>
        {theme === Theme.DARK ? <DarkIcon/> : <LightIcon/>}
      </Button>

    </div>
  );
}
