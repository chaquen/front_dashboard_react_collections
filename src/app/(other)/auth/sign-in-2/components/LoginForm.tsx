import PasswordFormInput from '@/components/form/PasswordFormInput'
import TextFormInput from '@/components/form/TextFormInput'
import { Button, FormCheck } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import useSignIn from './useSignIn'

const LoginForm = () => {
  const { loading, login, control } = useSignIn()
  const { t } = useTranslation()

  return (
    <form className="authentication-form" onSubmit={login}>
      <TextFormInput
        control={control}
        name="email"
        containerClassName="mb-3"
        label={t('auth.login.email')}
        id="email-id"
        placeholder={t('auth.login.email')}
      />

      <PasswordFormInput
        control={control}
        name="password"
        containerClassName="mb-3"
        placeholder={t('auth.login.password')}
        id="password-id"
        label={
          <>
            <Link to="/auth/reset-pass" className="float-end text-muted text-unline-dashed ms-1">
              {t('auth.login.forgotPassword')}
            </Link>
            <label className="form-label" htmlFor="example-password">
              {t('auth.login.password')}
            </label>
          </>
        }
      />
      <div className="mb-3">
        <FormCheck label={t('auth.login.rememberMe')} id="sign-in" />
      </div>
      <div className="mb-1 text-center d-grid">
        <Button variant="primary" type="submit" disabled={loading}>
          {t('auth.login.signIn')}
        </Button>
      </div>
    </form>
  )
}

export default LoginForm
