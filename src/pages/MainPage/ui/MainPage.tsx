import { ButtonError } from 'app/providers/ErrorBoundary';
import { useTranslation } from 'react-i18next';

export const MainPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <ButtonError/>
      {t<string>('Главная страница')}</div>
  )
}

export default MainPage
