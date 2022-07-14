import './styles.scss'

import Footer from '@components/footer'
import logo from '@images/logo.png'
import GithubCorner from 'react-github-corner'

type HomeProps = {
  title?: string
}

const Home: React.FunctionComponent<HomeProps> = () => (
  <div className="header">
    <GithubCorner
      href="https://github.com/moquette/base"
      octoColor="#fff"
      bannerColor="#179DFF"
    />
    <img src={logo} alt="logo" className="logo" />
    <p className="title">
      <span className="font-bold uppercase">Base</span>
      <br />
      A Minimalistic Webpack/React
      <br />
      Boilerplate for TypeScript projects
    </p>
    <Footer />
  </div>
)

export default Home
