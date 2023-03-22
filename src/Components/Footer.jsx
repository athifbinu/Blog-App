import React from 'react'
import "../Styles/Footer.css"
import {motion} from 'framer-motion'
const Footer = () => {
  return (
    <footer className='footer'>

            <div className="next-btn">
               <button>1</button>
               <button>2</button>
               <p>Next</p>
                  
            </div>
            <div className="footer-img">
               <motion.img whileHover={{scale:0.9}} src="https://images.unsplash.com/photo-1554663565-f60b88adfa08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="" />
               <motion.img whileHover={{scale:0.9}} src="https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80" alt="" />
               <motion.img whileHover={{scale:0.9}} src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
               <motion.img whileHover={{scale:0.9}} src="https://images.unsplash.com/photo-1541873676-a18131494184?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=418&q=80" alt="" />
               <motion.img whileHover={{scale:0.9}} src="https://images.unsplash.com/photo-1614728263952-84ea256f9679?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1008&q=80" alt="" />
               <motion.img whileHover={{scale:0.9}} src="https://images.unsplash.com/photo-1511436389635-11134775c795?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
            </div>

            <div className="folow-card">
            
              <h3>Follow My Instagram</h3>
                 <p>@logoipsum</p>
              
            </div>

            <div className="fooer-icon">
              <div className="icon-section">
                  <div class="rectangles"></div>
                  <div class="circles"> </div>
                   <div class="circles"> </div>
              </div>
                 <h2>logoipsum</h2>

            </div>


            <div className="social-text">
                    <div className="text-box">
                      
                        <ul>
                          <li>About ME</li>
                          <li>CONTACT ME</li>
                          <li>ADVERTISING</li>
                          <li>TERMS OF USE</li>
                          <li>SUBSCRIBE</li>
                        </ul>
                        
                    </div>
                 </div>

            

      
    </footer>
  )
}

export default Footer
