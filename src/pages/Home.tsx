import logo from '@/images/logo.svg'
import GithubCorner from 'react-github-corner'

export function Home() {
  return (
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
          A Minimalist React
          <br />
          boilerplate for TypeScript Projects.
          <br />
          Edit <code>&apos;src/resources/pages/Home.tsx&apos;</code>
          <br />
          <a
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {` `}
          &bull;{` `}
          <a
            href="https://github.com/moquette/base"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fork on Github
          </a>
        </p>
      </main>
    </>
  )
}
