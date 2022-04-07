import logo from '@/images/logo.svg'
import GithubCorner from 'react-github-corner'

const Home = () => (
  <>
    <GithubCorner
      href="https://github.com/moquette/base"
      octoColor="#282c34"
      bannerColor="#61DAFB"
    />
    <main className="home">
      <img src={logo} className="logo" alt="logo" />
      <h2>BASE</h2>
      <p>
        Minimalist React 18
        <br />
        Boilerplate for TS Projects
      </p>
    </main>
  </>
)

export default Home
