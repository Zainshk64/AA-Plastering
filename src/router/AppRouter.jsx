import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from '../components/layout/MainLayout'
import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import Portfolio from '../pages/Portfolio'
import Blogs from '../pages/Blogs'
import Contact from '../pages/Contact'
import SingleBlog from '../pages/single-blog/[id]'
import SingleService from '../pages/single-service/[id]'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="single-blog/:id" element={<SingleBlog/>}/>
          <Route path="single-service/:id" element={<SingleService/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter