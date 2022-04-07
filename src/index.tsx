import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '@/App'
import '@/styles/tailwind.scss'

const container = document.getElementById(`root`) as HTMLElement
const root = createRoot(container)
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
