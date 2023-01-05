import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import InfoList from '../components/InfoList';
import Layout from '../layout/Layout';

function AppRouters() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>

          <Route index element={<Home />} />

          <Route path='/:search' element={<Home />} />

          <Route path='/InfoList/:id' element={<InfoList />} />

          {/* Not Found */}
          <Route path='/*' element={<h1>Not Found 404</h1>} />

        </Route>

      </Routes>

    </Router>
  )
}

export default AppRouters