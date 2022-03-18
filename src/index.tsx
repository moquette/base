import { StrictMode } from 'react'
import { render } from 'react-dom'
import { App } from '@/App'
import '@/styles/tailwind.scss'

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById(`root`)
)
