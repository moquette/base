import { Footer } from '@components/footer'
import logo from '@images/logo.svg'
import GithubCorner from 'react-github-corner'

import { stylesHeader, stylesLogo } from './styles.module.scss'

type HomeProps = {
  title?: string
}

export const Home: React.FunctionComponent<HomeProps> = ({ title }) => (
  <div className={stylesHeader}>
    <GithubCorner
      href="https://github.com/moquette/base"
      octoColor="#3178c6"
      bannerColor="#fff"
    />
    <img src={logo} alt="logo" className={stylesLogo} />
    {title && <p>{title}</p>}
    <Footer />
  </div>
)
