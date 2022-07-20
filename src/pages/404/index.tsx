import './styles.scss'

import logo from '@images/logo.png'
import { Link } from 'react-router-dom'

import Layout from '../../layout'

const NotFound = () => (
  <Layout documentTitle="404: Page Not Found" className="not-found">
    <div className="header">
      <img src={logo} alt="logo" className="logo" />
      <p className="title">
        <span className="font-bold uppercase">404</span>
        <br />
        Page Not Found
        <br />
        <Link className="link underline" to="/">
          home
        </Link>
      </p>
    </div>
  </Layout>
)

export default NotFound
