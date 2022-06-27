import './styles.scss'

import app from '../../../package.json'

export const Footer = () => (
  <footer className="footer">
    <p>
      &copy;{new Date().getFullYear()} {app.name} v{app.version}
    </p>
  </footer>
)
