import React from 'react'
import "../Styles/Blogdetailes.css"
const BlogDetailes = (props) => {

      const datas=props.data

  return (
    <div>
      <div className="bl-detailes-section">
            {
               datas.map((item,index)=>{
                   if(index<1)
                return(
                  <>
             <div className="banner-img">
              <  img src="https://images.unsplash.com/photo-1486525546686-3cd5484691f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=831&q=80" alt="" />
             
              <div className="blog-section">

                   <div className="right-sectione">
                   <p className='mane-heade'>My Blogs</p>
                         <div className="card-one">
                           <p className='card-head'>LIFESTYLE</p>
                            <h2>{item.title}</h2>
                             <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                             <p>{item.body}</p>
                          
                         </div>

                         <div className="card-two">
                            <h3>{item.title}</h3>
                            <p>{item.body}</p>

                              <div className="card-two-img">
                                <img src="https://images.unsplash.com/photo-1519558260268-cde7e03a0152?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
                                <img src="https://images.unsplash.com/photo-1518546305927-5a555bb7020d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" alt="" />
                              </div>
                              <h3 className='cr-two-desc'>{item.title}</h3>
                              <p className='cr-two-desc'>{item.body}</p>
                         </div>


                         <div className="social-icons">
                          <p>shares</p>
                                   <img src="https://cdn-icons-png.flaticon.com/512/1051/1051377.png" alt="" />
                                   <img src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png" alt="" />
                                   <img src="https://cdn-icons-png.flaticon.com/512/1377/1377213.png" alt="" />
                                   <img src="https://cdn-icons-png.flaticon.com/512/4923/4923005.png" alt="" />
                          
                                </div>

                                <div className="releted">
                                  <p>REALATED PRODUCTS</p>
                                  <div className="related-section">
                                  <img className='related' src="https://images.unsplash.com/photo-1555169062-013468b47731?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                                   <img className='related' src="https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80" alt="" />
                                   <img className='related' src="https://images.unsplash.com/photo-1420593248178-d88870618ca0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                                  </div>
                                </div>




                   </div>
                   <div className="left-sectione">
                            <input type="text" placeholder='search' />

                            <div className="post">
                               
                                <div className='popular-card'>
                                  
                                    <div className="popular-card-section">
                                          <img src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80" alt="" />
                                          <h3>{item.title}</h3>
                                  
                                    </div>
                                </div>


                                <div className='popular-card'>
                                    <div className="popular-card-section">
                                          <img src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80" alt="" />
                                          <h3>{item.title}</h3>
                                  
                                    </div>
                                </div>


                                <div className='popular-card'>
                                    <div className="popular-card-section">
                                          <img src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80" alt="" />
                                          <h3>{item.title}</h3>
                                  
                                    </div>
                                </div>


                               <div className='card-image' >
                               <img  src="https://images.unsplash.com/photo-1614728263952-84ea256f9679?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1008&q=80" alt="" />

                               </div>

                            </div>

                   </div>
              </div>
           </div>
                  </>
                )
               })
            }
      </div>
    </div>
  )
}

export default BlogDetailes
