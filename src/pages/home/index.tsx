import './styles.scss'

import logo from '@images/logo.png'

import Layout from '../../layout'

type HomeProps = {
  title?: string
}

const Home: React.FunctionComponent<HomeProps> = () => (
  <Layout documentTitle="Welcome" className="home">
    <div className="header">
      <img src={logo} alt="logo" className="logo" />
      <p className="title">
        <span className="font-bold uppercase">Base</span>
        <br />
        A Minimalistic Webpack/React
        <br />
        Boilerplate for TypeScript projects
      </p>
    </div>
  </Layout>
)

export default Home
