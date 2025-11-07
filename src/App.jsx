import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import ProductsPage from './components/ProductsPage'
import ProductDetail from './components/ProductDetail'
import Account from './components/Account'
import AdminPanel from './components/AdminPanel'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-neutral-950 text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<ProductsPage />} />
          <Route path="/produtos/:id" element={<ProductDetail />} />
          <Route path="/conta" element={<Account />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
