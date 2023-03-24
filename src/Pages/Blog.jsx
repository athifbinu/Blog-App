import React from 'react'
import "../Styles/Blog.css"
const Blog = (props) => {

  const datas=props.data


  const date=new Date()

  let year =date.getFullYear()
  



  return (
    <div>
      <div className="blog-section">
               {
                datas.map((intem,index)=>{
                  if(index<1)
                  return(
                    <>
                        <div className="blog-hero">
                 <img src="https://images.unsplash.com/photo-1583228858294-6745cb25969e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="" />
                 <div className="blog-card">
                        <p>MY BLOG</p>
                     <div className="card-img">
                         <div className="sm-img">
                                 <img src="https://plus.unsplash.com/premium_photo-1674986163205-789ce0027fc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                                 <p>Beauty</p>
                                 <h2>{intem.title}</h2>
                                 <br />
                                 <span>BY JOHN /january {year}</span>
                                 <img src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80" alt="" />
                                 <p>Beauty</p>
                                 <h2>{intem.title}</h2>
                                 <br />
                                 <span>BY JOHN / MAY {year}</span>
                                 <img src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80" alt="" />
                                 <p>Beauty</p>
                                 <h2>{intem.title}</h2>
                                 <br />
                                 <span>BY JOHN / MAY {year}</span>
                         </div>
                         <div className="lg-img">
                            <img src="https://images.unsplash.com/photo-1597858520171-563a8e8b9925?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80" alt="" />
                            <p>Beauty</p>
                                 <h2>{intem.title}</h2>
                                 <br />
                                 <span>BY JOHN / MAY {year}</span>
                            <img src="https://images.unsplash.com/photo-1597858520171-563a8e8b9925?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80" alt="" />
                            <p>Beauty</p>
                                 <h2>{intem.title}</h2>
                                 <br />
                                 <span>BY JOHN / MAY {year}</span>
                            <img src="https://images.unsplash.com/photo-1597858520171-563a8e8b9925?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80" alt="" />
                         </div>
                         <div className="sm-img">
                         <img src="https://plus.unsplash.com/premium_photo-1674986163205-789ce0027fc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                         <p>Beauty</p>
                                 <h2>{intem.title}</h2>
                                 <br />
                                 <span>BY JOHN / MAY {year}</span>
                  
                                 <img src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80" alt="" />
                                 <p>Beauty</p>
                                 <h2>{intem.title}</h2>
                                 <br />
                                 <span>BY JOHN / MAY {year}</span>
                                 <img src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80" alt="" />  
                                 <p>Beauty</p>
                                 <h2>{intem.title}</h2>
                                 <br />
                                 <span>BY JOHN / MAY {year}</span>
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

export default Blog
