import React from 'react'
import "../Styles/Header.css"
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header>

          <div className="head-icons">
               <div class="rectangle"></div>
               <div class="circle"> </div>
               <div class="circle"> </div>
                <h3 className='hero-descriptions'>logoipsum</h3>
            </div>

           <div className="navs">
               <p>Home</p>
                
               <Link  to='/Blog'>BLog</Link>
           </div>

    </header>
  )
}

export default Header
