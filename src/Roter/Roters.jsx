import React,{useState,useEffect} from 'react'
import Home from '../Pages/Home'
import Blog from '../Pages/Blog'
import BlogDetailes from "../Pages/BlogDetailes"


import { Routes,Route,Navigate} from 'react-router-dom'

const Roters = () => {


  const [data,setData]=useState([])


  useEffect(()=>{
      fetch("https://jsonplaceholder.typicode.com/posts")
      .then((responce)=>responce.json())
      .then((data)=>setData(data))
      .catch((err)=>console.log(err))
  },[])
         
  
    
   
    
  return (
    <Routes>
            <Route path='/' element={<Navigate to='home'/>} />
            <Route path='home' element={<Home data={data}/>} />
            <Route path='blog' element={<Blog data={data} />} />
            <Route path='BlogDetailes' element={<BlogDetailes data={data} />} />

    </Routes>
  )
}

export default Roters
