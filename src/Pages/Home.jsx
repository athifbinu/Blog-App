import React from 'react'
import "../Styles/Home.css"
import {AiOutlineArrowRight} from "react-icons/ai"
import {motion} from "framer-motion"
import {AiOutlineSearch} from "react-icons/ai"

const Home = () => {
  return (
   <div>
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

   

     <div className="popular-section">
          <div className="mane-head">
            <h3>POPULAR STORYS</h3>
          </div>

          <div className="card-section">
            <div className="card">
                <motion.img  whileHover={{scale:0.9}} src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                 <p>Travel</p>
                 <h3>sheets containing pages</h3>
                 <br />
                 <span>By Nation / 02 MAY 2021</span>
            </div>

            <div className="card">
                <motion.img whileHover={{scale:0.9}} src="https://images.unsplash.com/photo-1625054790108-6a5fb0c174af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="" />
                 <p>Travel</p>
                 <h3>sheets containing pages</h3>
                 <br />
                 <span>By Nation / 02 MAY 2021</span>
            </div>

            <div className="card">
                <motion.img whileHover={{scale:0.9}} src="https://images.unsplash.com/photo-1549082984-1323b94df9a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                 <p>Travel</p>
                 <h3>sheets containing pages</h3>
                 <br />
                 <span>By Nation / 02 MAY 2021</span>
            </div>

            <div className="card">
                <motion.img whileHover={{scale:0.9}} src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                 <p>Travel</p>
                 <h3>sheets containing pages</h3>
                 <br />
                 <span>By Nation / 02 MAY 2021</span>
            </div>

 

          </div>
     

          <hr />

          <div className="large-section">


          <div className="profile-search">
                        <input type="text" placeholder='Search....' />
                        <AiOutlineSearch className='search-icon'/>
                  </div>
           

               <div className="profile-section">
        
                     <motion.img whileHover={{scale:0.9}} src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" alt="" />
                     <h1>Your Name</h1>
                    <p>Brief description of yourself</p>
               </div>
      


               <div className="lg-card">
                 <img src="https://images.unsplash.com/photo-1677691824304-279660ceece3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" />
                 <p>Future</p>
                 <h3>Thre is a variation of passengers of avalable not the major the major have suffered altretion</h3>
                 <br />
                 <span>by  name / 02 MAY 2023</span>

               </div>

          

               <div className="lg-card">
                 <img src="https://images.unsplash.com/photo-1677691824304-279660ceece3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" />
                 <p>Future</p>
                 <h3>Thre is a variation of passengers of avalable not the major the major have suffered altretion</h3>
                 <br />
                 <span>by  name / 02 MAY 2023</span>
               </div>

               <div className="lg-card">
                 <img src="https://images.unsplash.com/photo-1677691824304-279660ceece3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" />
                 <p>Future</p>
                 <h3>Thre is a variation of passengers of avalable not the major the major have suffered altretion</h3>
                 <br />
                 <span>by  name / 02 MAY 2023</span>
               </div>


          </div>
      </div>

  
   </div>
 
   
  )
}

export default Home
