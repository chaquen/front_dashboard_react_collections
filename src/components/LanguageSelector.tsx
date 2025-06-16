import { Dropdown } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import ReactCountryFlag from 'react-country-flag'

const LANGUAGES = [
  {
    code: 'en',
    name: 'English',
    countryCode: 'US',
  },
  {
    code: 'es',
    name: 'Español',
    countryCode: 'ES',
  },
]

const LanguageSelector = () => {
  const { i18n } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  const currentLang = LANGUAGES.find(lang => lang.code === i18n.language) || LANGUAGES[0]

  return (
    <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-languages" className="d-flex align-items-center gap-1">
        <ReactCountryFlag
          countryCode={currentLang.countryCode}
          svg
          style={{
            width: '1.2em',
            height: '1.2em',
          }}
        />
        <span className="ms-1">{currentLang.name}</span>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {LANGUAGES.map((lang) => (
          <Dropdown.Item 
            key={lang.code} 
            onClick={() => changeLanguage(lang.code)}
            className="d-flex align-items-center gap-2"
          >
            <ReactCountryFlag
              countryCode={lang.countryCode}
              svg
              style={{
                width: '1.2em',
                height: '1.2em',
              }}
            />
            {lang.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default LanguageSelector
