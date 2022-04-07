import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'
import NotFoundPage from '@/pages/NotFoundPage'

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
)

export default Router
