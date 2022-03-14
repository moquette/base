import { Link } from 'react-router-dom'
import logo from '@/images/logo.svg'

export function NotFound() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>404: Page Not Found.</p>
        <Link className="App-link" to="/">
          visit our home page
        </Link>
      </header>
    </div>
  )
}
