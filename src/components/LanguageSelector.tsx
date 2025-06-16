import { Dropdown } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

const LanguageSelector = () => {
  const { i18n } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  return (
    <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-languages">
        {i18n.language === 'es' ? 'ES' : 'EN'}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => changeLanguage('en')}>English</Dropdown.Item>
        <Dropdown.Item onClick={() => changeLanguage('es')}>Español</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default LanguageSelector
