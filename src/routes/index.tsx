import NotFound from '@pages/404'
import Home from '@pages/home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
