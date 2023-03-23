import React from 'react'
import Home from '../Pages/Home'
import Blog from '../Pages/Blog'
import BlogDetailes from "../Pages/BlogDetailes"


import { Routes,Route,Navigate} from 'react-router-dom'
const Roters = () => {
  return (
    <Routes>
            <Route path='/' element={<Navigate to='home'/>} />
            <Route path='home' element={<Home/>} />
            <Route path='blog' element={<Blog/>} />
            <Route path='BlogDetailes' element={<BlogDetailes/>} />

    </Routes>
  )
}

export default Roters
