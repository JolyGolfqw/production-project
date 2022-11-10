import { useTranslation } from 'react-i18next';

export default function AboutPage () {
  const { t } = useTranslation('about');

  return (
    <div>{t<string>('О нас')}</div>
  )
}
