

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Productos } from '../pages/Productos'
import App from '../App'
import { ProductDetails } from '../pages/productDetails'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<App/>} />
      <Route path='/productos' element={<Productos/>} />
      <Route path='/productos/:id' element={<ProductDetails/>} />
    </Routes>
  )
}
