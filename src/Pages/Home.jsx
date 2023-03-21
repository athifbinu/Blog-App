import React from 'react'
import "../Styles/Home.css"
import {Link} from "react-router-dom"
import {AiOutlineArrowRight} from "react-icons/ai"
const Home = () => {
  return (
   <div>
     <header>
     
            <div className="header-icons">
               <div class="rectangle"></div>
               <div class="circle"> </div>
               <div class="circle"> </div>
                <h3 className='hero-description'>logoipsum</h3>
            </div>
       

         <div className="nav">
               <p>Home</p>
               <p>BLog</p>
         </div>
       
     </header>

     <div className='container'>

          <div className="left-section">
            <div className="hero-img">
                <img src="https://images.unsplash.com/photo-1591035897819-f4bdf739f446?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
            </div>

            <div className="social-midia">

            </div>
          </div>


          

          <div className="right-section">
            <div className="section-data">

            <div className="date">
                 <p>BY EMMA / <span>02 MAY 2021</span></p>
            </div>
            
            <div className="right-heading">
                <h1>Life Is a flower Of Which <br />
                Love Is The Honey .</h1>
                <p className='right-description'>Lorem ipsum dolor sit amet remque enim ducimus iure soluta quis veniam 
                 molestiae aperiam a facilis vel.</p>

                 <p className='link'>READ MORE <span>
                   <AiOutlineArrowRight/>
                  </span></p>
            </div>

            </div>

            <div className="right-imgsection">
                <img src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="" />
                <img src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="" />
                <img src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="" />
                <img src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="" />
            </div>
         
          </div>
     </div>
   </div>
 
   
  )
}

export default Home
