import React from 'react'
import "../Styles/popular.css"

import {AiOutlineSearch} from "react-icons/ai"

const Popular = () => {
  return (
    <div>
      <div className="popular-section">
          <div className="mane-head">
            <h3>POPULAR STORYS</h3>
          </div>

          <div className="card-section">
            <div className="card">
                <img src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                 <p>Travel</p>
                 <h3>sheets containing pages</h3>
                 <br />
                 <span>By Nation / 02 MAY 2021</span>
            </div>

            <div className="card">
                <img src="https://images.unsplash.com/photo-1625054790108-6a5fb0c174af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="" />
                 <p>Travel</p>
                 <h3>sheets containing pages</h3>
                 <br />
                 <span>By Nation / 02 MAY 2021</span>
            </div>

            <div className="card">
                <img src="https://images.unsplash.com/photo-1549082984-1323b94df9a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                 <p>Travel</p>
                 <h3>sheets containing pages</h3>
                 <br />
                 <span>By Nation / 02 MAY 2021</span>
            </div>

            <div className="card">
                <img src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                 <p>Travel</p>
                 <h3>sheets containing pages</h3>
                 <br />
                 <span>By Nation / 02 MAY 2021</span>
            </div>

 

          </div>
     

          <hr />

          <div className="large-section">


          <div className="profile-card">
               <input  type="text" placeholder='Serach... ' />
               <AiOutlineSearch className='search-icon'/>

               <div className="profile-section">
                     <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" alt="" />
                     <h1>Your Name</h1>
                    <p>Brief description of yourself</p>
               </div>
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

export default Popular
