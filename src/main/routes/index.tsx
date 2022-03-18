import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '@/pages/Home'
import { NotFoundPage } from '@/pages/NotFoundPage'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
