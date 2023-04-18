import React from 'react'


const Frontdisplay = () => {
    const style = {
        width: "75%",
        height: "320px",
        // backgroundColor:"rgb(44, 44, 93)",
        margin: "0px 12.5%",
        backgroundImage: "url('https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW92aWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60')",
        backgroundSize: "cover",
        backgroundPosition:"center 40%"
    }
  return (
    <div style = {style}>
       <div className = "overlay">
        <div className = "fd_overlay-content">
        <h4>Welcome.</h4>
        <p>Millions of movies and TV shows. Explore Now</p>
        </div>
       </div>
       
    </div>
  )
}

export default Frontdisplay