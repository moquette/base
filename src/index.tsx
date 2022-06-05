import '@styles/index.scss'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { App } from '@components/app'

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
