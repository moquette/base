import './styles.scss'

import Footer from '@components/footer'
import useDocumentTitle from '@hooks/useDocumentTitle'
import logo from '@images/logo.svg'
import { Link } from 'react-router-dom'

const NotFound = () => (
  useDocumentTitle('404: Page Not Found'),
  (
    <div className="header">
      <img src={logo} alt="logo" className="logo" />
      <p>404: Page Not Found.</p>
      <Link className="link" to="/">
        home
      </Link>
      <Footer />
    </div>
  )
)

export default NotFound
