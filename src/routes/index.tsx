import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from '@/pages/Home'
import { NotFound } from '@/pages/404'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
