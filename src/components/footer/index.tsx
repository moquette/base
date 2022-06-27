import './styles.scss'

import app from '../../../package.json'

const Footer = () => (
  <footer className="footer">
    <p>
      &copy;{new Date().getFullYear()} {app.name} v{app.version}
    </p>
  </footer>
)

export default Footer
