import { Link } from 'react-router-dom'
import logo from '@/images/logo.svg'

export function NotFoundPage() {
  return (
    <main className="not-found">
      <img src={logo} className="logo" alt="logo" />
      <h2>BASE</h2>
      <p>404: Page Not Found.</p>
      <Link className="App-link" to="/">
        visit our home page
      </Link>
    </main>
  )
}
