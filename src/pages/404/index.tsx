import useDocumentTitle from '@hooks/useDocumentTitle'
import { Link } from 'react-router-dom'

import { Footer } from '@components/footer'

import logo from '@images/logo.svg'

import { stylesHeader, stylesLink, stylesLogo } from './styles.module.scss'

export const NotFound = () => (
  useDocumentTitle('404: Page Not Found'),
  (
    <div className={stylesHeader}>
      <img src={logo} alt="logo" className={stylesLogo} />
      <p>404: Page Not Found.</p>
      <Link className={stylesLink} to="/">
        home
      </Link>
      <Footer />
    </div>
  )
)
