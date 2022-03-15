import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from '@/pages/Home'
import { NotFound } from '@/pages/PageNotFound'

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
