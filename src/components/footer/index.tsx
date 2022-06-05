import app from '../../../package.json'
import { stylesFooter } from './styles.module.scss'

export const Footer = () => (
  <footer className={stylesFooter}>
    <p>
      &copy;{new Date().getFullYear()} {app.name} v{app.version}
    </p>
  </footer>
)
