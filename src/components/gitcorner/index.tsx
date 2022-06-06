import GithubCorner from 'react-github-corner'

interface GitCornerProps {
  color?: string
  background?: string
  url?: string
}

export const GitCorner = ({
  color,
  background,
  url,
}: GitCornerProps): JSX.Element => {
  return <GithubCorner href={url} octoColor={color} bannerColor={background} />
}
