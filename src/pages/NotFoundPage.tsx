import { Link } from 'react-router-dom'
import logo from '@/images/logo.svg'

const NotFoundPage = () => (
  <main className="not-found">
    <img src={logo} className="logo" alt="logo" />
    <h2>BASE</h2>
    <p>404: Page Not Found.</p>
    <Link className="App-link" to="/">
      Return to Homepage
    </Link>
  </main>
)

export default NotFoundPage
