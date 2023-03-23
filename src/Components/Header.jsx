import React from 'react'
import "../Styles/Header.css"
const Header = () => {
  return (
    <div className='head'>

          <div className="head-icons">
               <div class="rectangle"></div>
               <div class="circle"> </div>
               <div class="circle"> </div>
                <h3 className='hero-descriptions'>logoipsum</h3>
            </div>

           <div className="navs">
               <p>Home</p>
                
               <p to='/Blog'>BLog</p>
           </div>

    </div>
  )
}

export default Header
