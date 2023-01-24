import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Public/Home/Home';
import About from './Pages/Public/About/About';
import Vacation from './Pages/Public/Vacation/Vacation';

const AppRoutes = () => {
  return (
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/vacations' element={<Vacation />} />
          </Routes>
      </BrowserRouter>
  )
}

export default AppRoutes