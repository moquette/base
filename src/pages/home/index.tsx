import GithubCorner from 'react-github-corner'

import { Footer } from '@components/footer'

import logo from '@images/logo.svg'

import { stylesHeader, stylesLogo, stylesTitle } from './styles.module.scss'

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
    {title && <p className={stylesTitle}>{title}</p>}
    <Footer />
  </div>
)
