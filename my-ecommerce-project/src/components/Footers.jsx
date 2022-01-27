import React from 'react'
import Marquee from 'react-double-marquee';

import '../Global/footers.css'

const Footers = () => {
    return (
      <div className="footer-content">
     <div className="row">
     <div className='col'>
       <h2 style={{align:'left',color:'White',fontWeight:'bold'}}>Our Popular Brands</h2>
     <marquee direction = "up" style={{height:'200px'}}>
          <img src="https://purepng.com/public/uploads/large/purepng.com-nike-logologobrand-logoiconslogos-251519940082eoxxs.png" style={{height:"100px",width:"300px"}} />
          <img src="https://www.logolynx.com/images/logolynx/24/24754f8a3530d099632ff5ca0c58c454.png"  style={{height:"100px",width:"300px"}} />
          <img src="http://timelinkschennai.com/images/fastrack_latest_logo.png"  style={{height:"100px",width:"300px"}} />
          <img src="https://malaabes.com/image/data/Logos/US-Polo-Logo.png" style={{height:"100px",width:"300px"}} />
          <img src="https://th.bing.com/th/id/R.678d77999f3b122e3c6ac457b3bbeb4d?rik=nF%2bBrpFSpBSlVQ&riu=http%3a%2f%2fc767204.r4.cf2.rackcdn.com%2f499fc313-25be-41b4-a7f4-7e71bf957964.png&ehk=eneQwWkZd%2bdcBgY2LleNKywAxgJ04TOkKlXX%2f0r8bSA%3d&risl=&pid=ImgRaw&r=0" style={{height:"100px",width:"300px"}} />
          
   </marquee> 
     </div>
     <div className='col'>
       <h2 style={{align:'left',color:'White',fontWeight:'bold'}}>Free Feel to Contact</h2>
     <p style={{textAlign:'center', color:'white'}}>Thank you for visiting and using the site.Any queries feel free to contact us.</p>
    <h4 style={{  color:'white'}}>ABOUT US</h4>
    <p style={{textAlign:'center',  color:'white'}}>Contact us:9876543210 <br/>
      Mail:sagarexpo123@gmail.com
    </p>
    <h4 style={{  color:'white'}}>OUR OTHER RESOURCES:</h4>
     </div>
     <div className='col'>
       <h2 style={{align:'left',color:'White',fontWeight:'bold'}}>Follow Us</h2>
     <a href="https://www.facebook.com/" class="fab fa-facebook-f" style={{padding:15,textDecoration:'none',color:'White'}}></a>
      <a href="https://twitter.com/i/flow/signup?" class="fab fa-twitter"  style={{padding:15,textDecoration:'none',color:'white'}}></a>
      <a href="https://mail.google.com/" class="fab fa-google" style={{padding:15,textDecoration:'none',color:'white'}}></a>
      <a href="https://www.linkedin.com/signup" class="fab fa-linkedin" style={{padding:15,textDecoration:'none',color:'white'}}></a>
      <a href="https://in.pinterest.com/login/" class="fab fa-pinterest"style={{padding:15,textDecoration:'none',color:'white'}} ></a>
     </div>
     </div> 
      
  




    



    <div style={{float:'right', padding:5}}>

      
      </div>
      </div>


 
    )
}

export default Footers;