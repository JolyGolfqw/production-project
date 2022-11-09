import { useTranslation } from 'react-i18next';

export const MainPage = () => {
  const { t } = useTranslation();

  return (
    <div>{t<string>('Главная страница')}</div>
  )
}

export default MainPage