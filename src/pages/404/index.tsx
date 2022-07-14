import './styles.scss'

import logo from '@images/logo.png'
import { Link } from 'react-router-dom'

import Layout from '../../layout'

const NotFound = () => (
  <Layout documentTitle="404: Page Not Found" className="not-found">
    <div className="header">
      <img src={logo} alt="logo" className="logo" />
      <p>404: Page Not Found.</p>
      <Link className="link underline" to="/">
        home
      </Link>
    </div>
  </Layout>
)

export default NotFound
