import './styles.scss'

import Footer from '@components/footer'
import logo from '@images/logo.svg'
import GithubCorner from 'react-github-corner'

type HomeProps = {
  title?: string
}

const Home: React.FunctionComponent<HomeProps> = ({ title }) => (
  <div className="header">
    <GithubCorner
      href="https://github.com/moquette/base"
      octoColor="#3178c6"
      bannerColor="#fff"
    />
    <img src={logo} alt="logo" className="logo" />
    {title && <p className="title">{title}</p>}
    <Footer />
  </div>
)

export default Home
