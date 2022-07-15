/* eslint-disable @typescript-eslint/no-unused-vars */
import './styles.scss'

import Footer from '@components/footer'
import { GitCorner } from '@components/gitcorner'
import useDocumentTitle from '@hooks/useDocumentTitle'
import React, { ReactNode } from 'react'
import GithubCorner from 'react-github-corner'

interface LayoutProps {
  documentTitle?: string
  className?: string
  children: ReactNode
}

export const Layout: React.FunctionComponent<LayoutProps> = ({
  documentTitle,
  className,
  children,
}) => {
  const title = documentTitle ? `${documentTitle} | React App` : 'React App'
  const appClass = className ? `app ${className}` : 'app'
  useDocumentTitle(title)
  return (
    <div className={`${appClass}`}>
      <GitCorner background="#179DFF" url="https://github.com/moquette/base" />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
export default Layout
