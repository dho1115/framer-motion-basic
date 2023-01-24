import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Public/Home/Home';
import About from './Pages/Public/About/About';

const AppRoutes = () => {
  return (
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home />} />
          </Routes>
      </BrowserRouter>
  )
}

export default AppRoutes